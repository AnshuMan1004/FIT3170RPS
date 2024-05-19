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
import { Round, RoundDomainFacade } from '@server/modules/round/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { RoundApplicationEvent } from './round.application.event'
import { RoundCreateDto, RoundUpdateDto } from './round.dto'

@Controller('/v1/rounds')
export class RoundController {
  constructor(
    private eventService: EventService,
    private roundDomainFacade: RoundDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.roundDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: RoundCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.roundDomainFacade.create(body)

    await this.eventService.emit<RoundApplicationEvent.RoundCreated.Payload>(
      RoundApplicationEvent.RoundCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:roundId')
  async findOne(@Param('roundId') roundId: string, @Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.roundDomainFacade.findOneByIdOrFail(
      roundId,
      queryOptions,
    )

    return item
  }

  @Patch('/:roundId')
  async update(
    @Param('roundId') roundId: string,
    @Body() body: RoundUpdateDto,
  ) {
    const item = await this.roundDomainFacade.findOneByIdOrFail(roundId)

    const itemUpdated = await this.roundDomainFacade.update(
      item,
      body as Partial<Round>,
    )
    return itemUpdated
  }

  @Delete('/:roundId')
  async delete(@Param('roundId') roundId: string) {
    const item = await this.roundDomainFacade.findOneByIdOrFail(roundId)

    await this.roundDomainFacade.delete(item)

    return item
  }
}
