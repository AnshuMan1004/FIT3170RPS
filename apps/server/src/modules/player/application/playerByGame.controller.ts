import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { PlayerDomainFacade } from '@server/modules/player/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { PlayerApplicationEvent } from './player.application.event'
import { PlayerCreateDto } from './player.dto'

import { GameDomainFacade } from '../../game/domain'

@Controller('/v1/games')
export class PlayerByGameController {
  constructor(
    private gameDomainFacade: GameDomainFacade,

    private playerDomainFacade: PlayerDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/game/:gameId/players')
  async findManyGameId(
    @Param('gameId') gameId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.gameDomainFacade.findOneByIdOrFail(gameId)

    const items = await this.playerDomainFacade.findManyByGame(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/game/:gameId/players')
  async createByGameId(
    @Param('gameId') gameId: string,
    @Body() body: PlayerCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, gameId }

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
