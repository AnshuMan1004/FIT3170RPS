import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { PlayerDomainFacade } from './player.domain.facade'
import { Player } from './player.model'

@Module({
  imports: [TypeOrmModule.forFeature([Player]), DatabaseHelperModule],
  providers: [PlayerDomainFacade, PlayerDomainFacade],
  exports: [PlayerDomainFacade],
})
export class PlayerDomainModule {}
