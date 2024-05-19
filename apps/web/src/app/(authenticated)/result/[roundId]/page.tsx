'use client'

import { useEffect, useState } from 'react'
import { Typography, Card, Avatar, List, Space } from 'antd'
import { UserOutlined, TrophyOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function RoundResultPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const { enqueueSnackbar } = useSnackbar()
  const [round, setRound] = useState(null)
  const [choices, setChoices] = useState([])
  const [results, setResults] = useState([])

  useEffect(() => {
    const fetchRoundData = async () => {
      try {
        const roundData = await Api.Round.findOne(params.roundId, {
          includes: [
            'game',
            'choices',
            'results',
            'choices.player',
            'results.winnerPlayer',
          ],
        })
        setRound(roundData)
        setChoices(roundData.choices)
        setResults(roundData.results)
      } catch (error) {
        enqueueSnackbar('Failed to fetch round data', { variant: 'error' })
      }
    }

    fetchRoundData()
  }, [params.roundId])

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Round Results</Title>
      <Text type="secondary">Detailed results of the game round.</Text>

      {round && (
        <Card title={`Round ${round.roundNumber} - Game ${round.gameId}`}>
          <List
            itemLayout="horizontal"
            dataSource={choices}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar icon={<UserOutlined />} />}
                  title={item.player?.name || 'Unknown Player'}
                  description={`Made a choice: ${item.choice}`}
                />
              </List.Item>
            )}
          />
        </Card>
      )}

      <Title level={3}>Results</Title>
      <List
        itemLayout="horizontal"
        dataSource={results}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar icon={<TrophyOutlined />} />}
              title={`Winner: ${item.winnerPlayer?.name || 'No winner'}`}
              description={`Result Type: ${item.resultType}`}
            />
          </List.Item>
        )}
      />
    </PageLayout>
  )
}
