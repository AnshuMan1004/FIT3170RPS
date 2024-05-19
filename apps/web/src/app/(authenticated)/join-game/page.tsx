'use client'

import { useEffect, useState } from 'react'
import { Button, Col, Row, Typography, Spin, Alert, Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
const { confirm } = Modal
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function JoinGamePage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [game, setGame] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!userId) {
      enqueueSnackbar('You must be logged in to join a game', {
        variant: 'error',
      })
      router.push('/home')
      return
    }

    const fetchGame = async () => {
      setLoading(true)
      try {
        const gameData = await Api.Game.findOne(params.gameId, {
          includes: ['players', 'players.user'],
        })
        if (gameData.status === 'active') {
          setGame(gameData)
        } else {
          enqueueSnackbar('This game is no longer active.', { variant: 'info' })
          router.push('/lobby')
        }
      } catch (err) {
        setError('Failed to fetch game details')
        enqueueSnackbar('Error fetching game details', { variant: 'error' })
      } finally {
        setLoading(false)
      }
    }

    fetchGame()
  }, [userId, params.gameId, router])

  const handleJoinGame = async () => {
    confirm({
      title: 'Do you want to join this game?',
      icon: <ExclamationCircleOutlined />,
      content: 'Confirming will add you to the game room.',
      async onOk() {
        try {
          const player = await Api.Player.createOneByGameId(game.id, { userId })
          enqueueSnackbar('Successfully joined the game!', {
            variant: 'success',
          })
          router.push(`/game/${game.id}`)
        } catch (err) {
          enqueueSnackbar('Failed to join the game', { variant: 'error' })
        }
      },
    })
  }

  if (loading) return <Spin size="large" />

  if (error)
    return <Alert message="Error" description={error} type="error" showIcon />

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Join Game</Title>
      <Text>Join an existing multiplayer Rock-Paper-Scissors game.</Text>
      {game && (
        <Row gutter={16} style={{ marginTop: 20 }}>
          <Col span={24}>
            <Text strong>Game ID: </Text>
            <Text>{game.id}</Text>
          </Col>
          <Col span={24}>
            <Text strong>Players in Game: </Text>
            <Text>
              {game.players?.map(player => player.user?.name).join(', ')}
            </Text>
          </Col>
          <Col span={24}>
            <Button
              type="primary"
              onClick={handleJoinGame}
              icon={<ExclamationCircleOutlined />}
            >
              Join Game
            </Button>
          </Col>
        </Row>
      )}
    </PageLayout>
  )
}
