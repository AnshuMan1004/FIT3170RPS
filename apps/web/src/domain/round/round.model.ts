import { Game } from '../game'

import { Choice } from '../choice'

import { Result } from '../result'

export class Round {
  id: string

  roundNumber: number

  gameId: string

  game?: Game

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  choices?: Choice[]

  results?: Result[]
}
