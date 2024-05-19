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
export class Game {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  status: string

  @OneToMany(() => Round, child => child.game)
  rounds?: Round[]

  @OneToMany(() => Player, child => child.game)
  players?: Player[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
