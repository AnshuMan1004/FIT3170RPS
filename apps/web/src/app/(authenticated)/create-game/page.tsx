'use client'

import { useState } from 'react'
import { Button, Form, Input, Typography, message } from 'antd'
const { Title, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function CreateGamePage() {
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()
  const authentication = useAuthentication()
  const userId = authentication.user?.id

  const [loading, setLoading] = useState(false)

  const handleCreateGame = async () => {
    if (!userId) {
      enqueueSnackbar('You must be logged in to create a game.', {
        variant: 'error',
      })
      return
    }

    setLoading(true)

    try {
      const newGame = await Api.Game.createOne({ status: 'pending' })
      enqueueSnackbar('Game created successfully!', { variant: 'success' })
      router.push(`/game/${newGame.id}`)
    } catch (error) {
      enqueueSnackbar('Failed to create game.', { variant: 'error' })
      console.error('Failed to create game:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Create New Game</Title>
      <Paragraph>
        Start a new Rock-Paper-Scissors game session. Invite friends to join
        your game once created.
      </Paragraph>
      <Form layout="vertical" onFinish={handleCreateGame}>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Create Game
          </Button>
        </Form.Item>
      </Form>
    </PageLayout>
  )
}
