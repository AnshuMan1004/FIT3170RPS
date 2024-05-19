'use client'

import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row, Typography, Modal, Input, Space } from 'antd'
import { PlusOutlined, EnterOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function GameLobbyPage() {
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()
  const authentication = useAuthentication()
  const userId = authentication.user?.id

  const [games, setGames] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [newGameStatus, setNewGameStatus] = useState('')

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const gamesFound = await Api.Game.findMany({
          includes: ['players', 'rounds'],
        })
        setGames(gamesFound)
      } catch (error) {
        enqueueSnackbar('Failed to fetch games', { variant: 'error' })
      }
    }

    fetchGames()
  }, [])

  const handleCreateGame = async () => {
    try {
      const gameCreated = await Api.Game.createOne({ status: newGameStatus })
      setGames([...games, gameCreated])
      setIsModalVisible(false)
      enqueueSnackbar('Game created successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to create game', { variant: 'error' })
    }
  }

  const handleJoinGame = async gameId => {
    try {
      await Api.Player.createOneByGameId(gameId, { userId })
      router.push(`/game/${gameId}`)
    } catch (error) {
      enqueueSnackbar('Failed to join game', { variant: 'error' })
    }
  }

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Game Lobby</Title>
      <Text>Welcome to the game lobby. Here you can join or create games.</Text>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={showModal}
        style={{ margin: '20px 0' }}
      >
        Create Game
      </Button>
      <Row gutter={16}>
        {games?.map(game => (
          <Col key={game.id} span={8}>
            <Card title={`Game ID: ${game.id}`} bordered={false}>
              <p>Status: {game.status}</p>
              <p>Players: {game.players?.length}</p>
              <Button
                type="primary"
                icon={<EnterOutlined />}
                onClick={() => handleJoinGame(game.id)}
              >
                Join Game
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
      <Modal
        title="Create a New Game"
        visible={isModalVisible}
        onOk={handleCreateGame}
        onCancel={handleCancel}
      >
        <Input
          placeholder="Enter game status"
          value={newGameStatus}
          onChange={e => setNewGameStatus(e.target.value)}
        />
      </Modal>
    </PageLayout>
  )
}
