import { Module } from '@nestjs/common'
import { AuthenticationApplicationModule } from './authentication/application'
import { AuthorizationApplicationModule } from './authorization/application'
import { UserApplicationModule } from './user/application'

import { GameApplicationModule } from './game/application'

import { RoundApplicationModule } from './round/application'

import { PlayerApplicationModule } from './player/application'

import { ChoiceApplicationModule } from './choice/application'

import { ResultApplicationModule } from './result/application'

import { AiApplicationModule } from './ai/application/ai.application.module'
import { NotificationApplicationModule } from './notification/application/notification.application.module'
import { UploadApplicationModule } from './upload/application/upload.application.module'

@Module({
  imports: [
    AuthenticationApplicationModule,
    UserApplicationModule,
    AuthorizationApplicationModule,
    NotificationApplicationModule,
    AiApplicationModule,
    UploadApplicationModule,

    GameApplicationModule,

    RoundApplicationModule,

    PlayerApplicationModule,

    ChoiceApplicationModule,

    ResultApplicationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppApplicationModule {}
