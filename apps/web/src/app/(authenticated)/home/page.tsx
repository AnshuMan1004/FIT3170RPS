'use client'

import React, { useState, useEffect } from 'react'
import { Typography, Button, Card, Avatar, Row, Col } from 'antd'
import {
  UserOutlined,
  NotificationOutlined,
  PlayCircleOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function HomePage() {
  const router = useRouter()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!userId) {
      enqueueSnackbar('User not found, please login.', { variant: 'error' })
      router.push('/')
      return
    }

    const fetchUser = async () => {
      try {
        const userData = await Api.User.findOne(userId, {
          includes: ['notifications', 'players'],
        })
        setUser(userData)
      } catch (error) {
        enqueueSnackbar('Failed to fetch user data.', { variant: 'error' })
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [userId, router])

  const handleCreateGame = () => {
    router.push('/create-game')
  }

  const handleJoinGame = () => {
    router.push('/join-game')
  }

  return (
    <div style={{ maxWidth: '800px', margin: 'auto' }}>
      <Title>Welcome to Rock-Paper-Scissors Game</Title>
      <Text>Start a new game or join an existing one to play.</Text>

      <Row gutter={16} style={{ marginTop: 20 }}>
        <Col span={12}>
          <Card
            actions={[
              <Button
                type="primary"
                onClick={handleCreateGame}
                icon={<PlayCircleOutlined />}
              >
                Create Game
              </Button>,
            ]}
          >
            <Card.Meta
              avatar={<Avatar icon={<UserOutlined />} />}
              title={user?.name || 'Anonymous'}
              description={`Joined on ${dayjs(user?.dateCreated).format('DD MMM YYYY')}`}
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card
            actions={[
              <Button
                type="primary"
                onClick={handleJoinGame}
                icon={<PlayCircleOutlined />}
              >
                Join Game
              </Button>,
            ]}
          >
            <Card.Meta
              avatar={<Avatar icon={<NotificationOutlined />} />}
              title="Notifications"
              description={`${user?.notifications?.length || 0} new notifications`}
            />
          </Card>
        </Col>
      </Row>
    </div>
  )
}
