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

import { Game } from '../../../modules/game/domain'

import { Choice } from '../../../modules/choice/domain'

import { Result } from '../../../modules/result/domain'

@Entity()
export class Round {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ColumnNumeric({ type: 'numeric' })
  roundNumber: number

  @Column({})
  gameId: string

  @ManyToOne(() => Game, parent => parent.rounds)
  @JoinColumn({ name: 'gameId' })
  game?: Game

  @OneToMany(() => Choice, child => child.round)
  choices?: Choice[]

  @OneToMany(() => Result, child => child.round)
  results?: Result[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
