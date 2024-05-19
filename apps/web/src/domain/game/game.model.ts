import { Round } from '../round'

import { Player } from '../player'

export class Game {
  id: string

  status: string

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  rounds?: Round[]

  players?: Player[]
}
