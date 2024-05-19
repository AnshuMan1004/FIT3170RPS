import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { PlayerDomainFacade } from '@server/modules/player/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { PlayerApplicationEvent } from './player.application.event'
import { PlayerCreateDto } from './player.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class PlayerByUserController {
  constructor(
    private userDomainFacade: UserDomainFacade,

    private playerDomainFacade: PlayerDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/user/:userId/players')
  async findManyUserId(
    @Param('userId') userId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(userId)

    const items = await this.playerDomainFacade.findManyByUser(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/user/:userId/players')
  async createByUserId(
    @Param('userId') userId: string,
    @Body() body: PlayerCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId }

    const item = await this.playerDomainFacade.create(valuesUpdated)

    await this.eventService.emit<PlayerApplicationEvent.PlayerCreated.Payload>(
      PlayerApplicationEvent.PlayerCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
