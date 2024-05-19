import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { ResultDomainFacade } from '@server/modules/result/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { ResultApplicationEvent } from './result.application.event'
import { ResultCreateDto } from './result.dto'

import { RoundDomainFacade } from '../../round/domain'

@Controller('/v1/rounds')
export class ResultByRoundController {
  constructor(
    private roundDomainFacade: RoundDomainFacade,

    private resultDomainFacade: ResultDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/round/:roundId/results')
  async findManyRoundId(
    @Param('roundId') roundId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.roundDomainFacade.findOneByIdOrFail(roundId)

    const items = await this.resultDomainFacade.findManyByRound(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/round/:roundId/results')
  async createByRoundId(
    @Param('roundId') roundId: string,
    @Body() body: ResultCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, roundId }

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
