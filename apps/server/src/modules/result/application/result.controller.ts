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
import { Result, ResultDomainFacade } from '@server/modules/result/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { ResultApplicationEvent } from './result.application.event'
import { ResultCreateDto, ResultUpdateDto } from './result.dto'

@Controller('/v1/results')
export class ResultController {
  constructor(
    private eventService: EventService,
    private resultDomainFacade: ResultDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.resultDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: ResultCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.resultDomainFacade.create(body)

    await this.eventService.emit<ResultApplicationEvent.ResultCreated.Payload>(
      ResultApplicationEvent.ResultCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:resultId')
  async findOne(@Param('resultId') resultId: string, @Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.resultDomainFacade.findOneByIdOrFail(
      resultId,
      queryOptions,
    )

    return item
  }

  @Patch('/:resultId')
  async update(
    @Param('resultId') resultId: string,
    @Body() body: ResultUpdateDto,
  ) {
    const item = await this.resultDomainFacade.findOneByIdOrFail(resultId)

    const itemUpdated = await this.resultDomainFacade.update(
      item,
      body as Partial<Result>,
    )
    return itemUpdated
  }

  @Delete('/:resultId')
  async delete(@Param('resultId') resultId: string) {
    const item = await this.resultDomainFacade.findOneByIdOrFail(resultId)

    await this.resultDomainFacade.delete(item)

    return item
  }
}
