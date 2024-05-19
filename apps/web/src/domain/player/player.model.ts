import { User } from '../user'

import { Game } from '../game'

import { Choice } from '../choice'

import { Result } from '../result'

export class Player {
  id: string

  userId: string

  user?: User

  gameId: string

  game?: Game

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  choices?: Choice[]

  resultsAsWinnerPlayer?: Result[]
}
