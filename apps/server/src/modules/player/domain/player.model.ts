import { ColumnNumeric } from '@server/core/database'
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { User } from '../../../modules/user/domain'

import { Game } from '../../../modules/game/domain'

import { Choice } from '../../../modules/choice/domain'

import { Result } from '../../../modules/result/domain'

@Entity()
export class Player {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  userId: string

  @ManyToOne(() => User, parent => parent.players)
  @JoinColumn({ name: 'userId' })
  user?: User

  @Column({})
  gameId: string

  @ManyToOne(() => Game, parent => parent.players)
  @JoinColumn({ name: 'gameId' })
  game?: Game

  @OneToMany(() => Choice, child => child.player)
  choices?: Choice[]

  @OneToMany(() => Result, child => child.winnerPlayer)
  resultsAsWinnerPlayer?: Result[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
