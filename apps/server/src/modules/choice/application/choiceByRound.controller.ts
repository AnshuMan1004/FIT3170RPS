import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { ChoiceDomainFacade } from '@server/modules/choice/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { ChoiceApplicationEvent } from './choice.application.event'
import { ChoiceCreateDto } from './choice.dto'

import { RoundDomainFacade } from '../../round/domain'

@Controller('/v1/rounds')
export class ChoiceByRoundController {
  constructor(
    private roundDomainFacade: RoundDomainFacade,

    private choiceDomainFacade: ChoiceDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/round/:roundId/choices')
  async findManyRoundId(
    @Param('roundId') roundId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.roundDomainFacade.findOneByIdOrFail(roundId)

    const items = await this.choiceDomainFacade.findManyByRound(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/round/:roundId/choices')
  async createByRoundId(
    @Param('roundId') roundId: string,
    @Body() body: ChoiceCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, roundId }

    const item = await this.choiceDomainFacade.create(valuesUpdated)

    await this.eventService.emit<ChoiceApplicationEvent.ChoiceCreated.Payload>(
      ChoiceApplicationEvent.ChoiceCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
