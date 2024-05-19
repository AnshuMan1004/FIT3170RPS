import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { RoundDomainModule } from '../domain'
import { RoundController } from './round.controller'

import { GameDomainModule } from '../../../modules/game/domain'

import { RoundByGameController } from './roundByGame.controller'

@Module({
  imports: [AuthenticationDomainModule, RoundDomainModule, GameDomainModule],
  controllers: [RoundController, RoundByGameController],
  providers: [],
})
export class RoundApplicationModule {}
