import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { ResultDomainModule } from '../domain'
import { ResultController } from './result.controller'

import { RoundDomainModule } from '../../../modules/round/domain'

import { ResultByRoundController } from './resultByRound.controller'

import { PlayerDomainModule } from '../../../modules/player/domain'

import { ResultByPlayerController } from './resultByPlayer.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    ResultDomainModule,

    RoundDomainModule,

    PlayerDomainModule,
  ],
  controllers: [
    ResultController,

    ResultByRoundController,

    ResultByPlayerController,
  ],
  providers: [],
})
export class ResultApplicationModule {}
