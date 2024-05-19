import { Player } from '../player'

import { Round } from '../round'

export class Choice {
  id: string

  choice: string

  playerId: string

  player?: Player

  roundId: string

  round?: Round

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
