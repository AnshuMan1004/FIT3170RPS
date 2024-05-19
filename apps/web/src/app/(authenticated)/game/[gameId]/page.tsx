'use client'

import { useEffect, useState } from 'react'
import { Button, Card, Col, Row, Typography, Space } from 'antd'
import {
  PushpinOutlined,
  FileTextOutlined,
  ScissorOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function GameRoomPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [game, setGame] = useState<Model.Game | null>(null)
  const [rounds, setRounds] = useState<Model.Round[]>([])
  const [players, setPlayers] = useState<Model.Player[]>([])

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const gameDetails = await Api.Game.findOne(params.gameId, {
          includes: ['rounds', 'players'],
        })
        setGame(gameDetails)
        setRounds(gameDetails.rounds || [])
        setPlayers(gameDetails.players || [])
      } catch (error) {
        enqueueSnackbar('Failed to fetch game details', { variant: 'error' })
      }
    }

    fetchGameDetails()
  }, [params.gameId])

  const handleChoice = async (choice: string) => {
    try {
      const currentRound = rounds[rounds.length - 1]
      const choiceData = await Api.Choice.createOneByPlayerId(userId, {
        choice: choice,
        roundId: currentRound.id,
      })
      enqueueSnackbar(`You played ${choiceData.choice}`, { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to make a choice', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Rock-Paper-Scissors Game</Title>
      <Text>
        Participate in the thrilling game of Rock-Paper-Scissors. Make your
        move!
      </Text>
      <Row gutter={16} style={{ marginTop: 20 }}>
        {players?.map(player => (
          <Col key={player.id} span={8}>
            <Card title={player.user?.name || 'Anonymous'}>
              <p>{player.user?.email}</p>
            </Card>
          </Col>
        ))}
      </Row>
      <Row gutter={16} justify="center" style={{ marginTop: 20 }}>
        <Col>
          <Space>
            <Button
              icon={<PushpinOutlined />}
              onClick={() => handleChoice('rock')}
            >
              Rock
            </Button>
            <Button
              icon={<FileTextOutlined />}
              onClick={() => handleChoice('paper')}
            >
              Paper
            </Button>
            <Button
              icon={<ScissorOutlined />}
              onClick={() => handleChoice('scissors')}
            >
              Scissors
            </Button>
          </Space>
        </Col>
      </Row>
    </PageLayout>
  )
}
