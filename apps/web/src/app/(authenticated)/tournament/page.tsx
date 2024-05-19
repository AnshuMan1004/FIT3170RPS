'use client'

import { useEffect, useState } from 'react'
import { Typography, Table, Tag, Avatar } from 'antd'
import { TrophyOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function TournamentProgressPage() {
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const gamesFound = await Api.Game.findMany({
          includes: ['players', 'players.user', 'rounds', 'rounds.results'],
        })
        setGames(gamesFound)
        setLoading(false)
      } catch (error) {
        enqueueSnackbar('Failed to fetch games', { variant: 'error' })
        setLoading(false)
      }
    }

    fetchGames()
  }, [])

  const columns = [
    {
      title: 'Game ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: status => (
        <Tag color={status === 'active' ? 'green' : 'volcano'}>
          {status.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: 'Players',
      dataIndex: 'players',
      key: 'players',
      render: players => (
        <>
          {players?.map(player => (
            <Avatar key={player.id} src={player.user?.pictureUrl} />
          ))}
        </>
      ),
    },
    {
      title: 'Rounds',
      dataIndex: 'rounds',
      key: 'rounds',
      render: rounds => rounds?.length,
    },
    {
      title: 'Last Updated',
      dataIndex: 'dateUpdated',
      key: 'dateUpdated',
      render: date => dayjs(date).format('DD/MM/YYYY'),
    },
  ]

  return (
    <PageLayout layout="narrow">
      <Title level={2}>
        <TrophyOutlined /> Tournament Progress
      </Title>
      <Text>This page displays the ongoing progress of the tournament.</Text>
      <Table
        columns={columns}
        dataSource={games}
        rowKey="id"
        loading={loading}
        onRow={record => ({
          onClick: () => {
            router.push(`/game/${record.id}`)
          },
        })}
      />
    </PageLayout>
  )
}
