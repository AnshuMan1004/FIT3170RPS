import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { RoundDomainFacade } from '@server/modules/round/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RoundApplicationEvent } from './round.application.event'
import { RoundCreateDto } from './round.dto'

import { GameDomainFacade } from '../../game/domain'

@Controller('/v1/games')
export class RoundByGameController {
  constructor(
    private gameDomainFacade: GameDomainFacade,

    private roundDomainFacade: RoundDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/game/:gameId/rounds')
  async findManyGameId(
    @Param('gameId') gameId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.gameDomainFacade.findOneByIdOrFail(gameId)

    const items = await this.roundDomainFacade.findManyByGame(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/game/:gameId/rounds')
  async createByGameId(
    @Param('gameId') gameId: string,
    @Body() body: RoundCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, gameId }

    const item = await this.roundDomainFacade.create(valuesUpdated)

    await this.eventService.emit<RoundApplicationEvent.RoundCreated.Payload>(
      RoundApplicationEvent.RoundCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
