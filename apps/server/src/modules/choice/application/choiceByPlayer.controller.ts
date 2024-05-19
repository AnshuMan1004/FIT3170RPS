import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { ChoiceDomainFacade } from '@server/modules/choice/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { ChoiceApplicationEvent } from './choice.application.event'
import { ChoiceCreateDto } from './choice.dto'

import { PlayerDomainFacade } from '../../player/domain'

@Controller('/v1/players')
export class ChoiceByPlayerController {
  constructor(
    private playerDomainFacade: PlayerDomainFacade,

    private choiceDomainFacade: ChoiceDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/player/:playerId/choices')
  async findManyPlayerId(
    @Param('playerId') playerId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.playerDomainFacade.findOneByIdOrFail(playerId)

    const items = await this.choiceDomainFacade.findManyByPlayer(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/player/:playerId/choices')
  async createByPlayerId(
    @Param('playerId') playerId: string,
    @Body() body: ChoiceCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, playerId }

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
