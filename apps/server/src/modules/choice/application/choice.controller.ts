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
import { Choice, ChoiceDomainFacade } from '@server/modules/choice/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { ChoiceApplicationEvent } from './choice.application.event'
import { ChoiceCreateDto, ChoiceUpdateDto } from './choice.dto'

@Controller('/v1/choices')
export class ChoiceController {
  constructor(
    private eventService: EventService,
    private choiceDomainFacade: ChoiceDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.choiceDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: ChoiceCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.choiceDomainFacade.create(body)

    await this.eventService.emit<ChoiceApplicationEvent.ChoiceCreated.Payload>(
      ChoiceApplicationEvent.ChoiceCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:choiceId')
  async findOne(@Param('choiceId') choiceId: string, @Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.choiceDomainFacade.findOneByIdOrFail(
      choiceId,
      queryOptions,
    )

    return item
  }

  @Patch('/:choiceId')
  async update(
    @Param('choiceId') choiceId: string,
    @Body() body: ChoiceUpdateDto,
  ) {
    const item = await this.choiceDomainFacade.findOneByIdOrFail(choiceId)

    const itemUpdated = await this.choiceDomainFacade.update(
      item,
      body as Partial<Choice>,
    )
    return itemUpdated
  }

  @Delete('/:choiceId')
  async delete(@Param('choiceId') choiceId: string) {
    const item = await this.choiceDomainFacade.findOneByIdOrFail(choiceId)

    await this.choiceDomainFacade.delete(item)

    return item
  }
}
