import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { ChoiceDomainModule } from '../domain'
import { ChoiceController } from './choice.controller'

import { PlayerDomainModule } from '../../../modules/player/domain'

import { ChoiceByPlayerController } from './choiceByPlayer.controller'

import { RoundDomainModule } from '../../../modules/round/domain'

import { ChoiceByRoundController } from './choiceByRound.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    ChoiceDomainModule,

    PlayerDomainModule,

    RoundDomainModule,
  ],
  controllers: [
    ChoiceController,

    ChoiceByPlayerController,

    ChoiceByRoundController,
  ],
  providers: [],
})
export class ChoiceApplicationModule {}
