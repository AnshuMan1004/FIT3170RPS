import { Request } from 'express'

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common'
import { EventService } from '@server/libraries/event'
import { Player, PlayerDomainFacade } from '@server/modules/player/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { PlayerApplicationEvent } from './player.application.event'
import { PlayerCreateDto, PlayerUpdateDto } from './player.dto'

@Controller('/v1/players')
export class PlayerController {
  constructor(
    private eventService: EventService,
    private playerDomainFacade: PlayerDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.playerDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: PlayerCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.playerDomainFacade.create(body)

    await this.eventService.emit<PlayerApplicationEvent.PlayerCreated.Payload>(
      PlayerApplicationEvent.PlayerCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:playerId')
  async findOne(@Param('playerId') playerId: string, @Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.playerDomainFacade.findOneByIdOrFail(
      playerId,
      queryOptions,
    )

    return item
  }

  @Patch('/:playerId')
  async update(
    @Param('playerId') playerId: string,
    @Body() body: PlayerUpdateDto,
  ) {
    const item = await this.playerDomainFacade.findOneByIdOrFail(playerId)

    const itemUpdated = await this.playerDomainFacade.update(
      item,
      body as Partial<Player>,
    )
    return itemUpdated
  }

  @Delete('/:playerId')
  async delete(@Param('playerId') playerId: string) {
    const item = await this.playerDomainFacade.findOneByIdOrFail(playerId)

    await this.playerDomainFacade.delete(item)

    return item
  }
}
