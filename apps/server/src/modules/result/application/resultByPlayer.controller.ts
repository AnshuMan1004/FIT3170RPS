import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { ResultDomainFacade } from '@server/modules/result/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { ResultApplicationEvent } from './result.application.event'
import { ResultCreateDto } from './result.dto'

import { PlayerDomainFacade } from '../../player/domain'

@Controller('/v1/players')
export class ResultByPlayerController {
  constructor(
    private playerDomainFacade: PlayerDomainFacade,

    private resultDomainFacade: ResultDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/winnerPlayer/:winnerPlayerId/results')
  async findManyWinnerPlayerId(
    @Param('winnerPlayerId') winnerPlayerId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent =
      await this.playerDomainFacade.findOneByIdOrFail(winnerPlayerId)

    const items = await this.resultDomainFacade.findManyByWinnerPlayer(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/winnerPlayer/:winnerPlayerId/results')
  async createByWinnerPlayerId(
    @Param('winnerPlayerId') winnerPlayerId: string,
    @Body() body: ResultCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, winnerPlayerId }

    const item = await this.resultDomainFacade.create(valuesUpdated)

    await this.eventService.emit<ResultApplicationEvent.ResultCreated.Payload>(
      ResultApplicationEvent.ResultCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
