import { Module } from '@nestjs/common'
import { SocketModule } from '@server/libraries/socket'
import { AuthorizationDomainModule } from '@server/modules/authorization/domain'
import { NotificationDomainModule } from '../domain'

import { NotificationGameSubscriber } from './subscribers/notification.game.subscriber'

import { NotificationRoundSubscriber } from './subscribers/notification.round.subscriber'

import { NotificationPlayerSubscriber } from './subscribers/notification.player.subscriber'

import { NotificationChoiceSubscriber } from './subscribers/notification.choice.subscriber'

import { NotificationResultSubscriber } from './subscribers/notification.result.subscriber'

@Module({
  imports: [AuthorizationDomainModule, NotificationDomainModule, SocketModule],
  providers: [
    NotificationGameSubscriber,

    NotificationRoundSubscriber,

    NotificationPlayerSubscriber,

    NotificationChoiceSubscriber,

    NotificationResultSubscriber,
  ],
  exports: [],
})
export class NotificationInfrastructureModule {}
