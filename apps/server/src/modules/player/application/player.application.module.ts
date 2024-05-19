import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { PlayerDomainModule } from '../domain'
import { PlayerController } from './player.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { PlayerByUserController } from './playerByUser.controller'

import { GameDomainModule } from '../../../modules/game/domain'

import { PlayerByGameController } from './playerByGame.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    PlayerDomainModule,

    UserDomainModule,

    GameDomainModule,
  ],
  controllers: [
    PlayerController,

    PlayerByUserController,

    PlayerByGameController,
  ],
  providers: [],
})
export class PlayerApplicationModule {}
