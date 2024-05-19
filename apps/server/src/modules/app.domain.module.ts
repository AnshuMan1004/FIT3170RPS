import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from './authentication/domain'
import { AuthorizationDomainModule } from './authorization/domain'

import { UserDomainModule } from './user/domain'

import { NotificationDomainModule } from './notification/domain'

import { GameDomainModule } from './game/domain'

import { RoundDomainModule } from './round/domain'

import { PlayerDomainModule } from './player/domain'

import { ChoiceDomainModule } from './choice/domain'

import { ResultDomainModule } from './result/domain'

@Module({
  imports: [
    AuthenticationDomainModule,
    AuthorizationDomainModule,
    UserDomainModule,
    NotificationDomainModule,

    GameDomainModule,

    RoundDomainModule,

    PlayerDomainModule,

    ChoiceDomainModule,

    ResultDomainModule,
  ],
  controllers: [],
  providers: [],
})
export class AppDomainModule {}
