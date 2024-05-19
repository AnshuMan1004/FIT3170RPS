import { Round } from '../round'

import { Player } from '../player'

export class Result {
  id: string

  resultType: string

  roundId: string

  round?: Round

  winnerPlayerId?: string

  winnerPlayer?: Player

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
