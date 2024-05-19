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

import { Round } from '../../../modules/round/domain'

import { Player } from '../../../modules/player/domain'

@Entity()
export class Result {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  resultType: string

  @Column({})
  roundId: string

  @ManyToOne(() => Round, parent => parent.results)
  @JoinColumn({ name: 'roundId' })
  round?: Round

  @Column({ nullable: true })
  winnerPlayerId?: string

  @ManyToOne(() => Player, parent => parent.resultsAsWinnerPlayer)
  @JoinColumn({ name: 'winnerPlayerId' })
  winnerPlayer?: Player

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
