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

import { Player } from '../../../modules/player/domain'

import { Round } from '../../../modules/round/domain'

@Entity()
export class Choice {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  choice: string

  @Column({})
  playerId: string

  @ManyToOne(() => Player, parent => parent.choices)
  @JoinColumn({ name: 'playerId' })
  player?: Player

  @Column({})
  roundId: string

  @ManyToOne(() => Round, parent => parent.choices)
  @JoinColumn({ name: 'roundId' })
  round?: Round

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
