import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Choice } from './choice.model'

export class ChoiceApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Choice>,
  ): Promise<Choice[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/choices${buildOptions}`)
  }

  static findOne(
    choiceId: string,
    queryOptions?: ApiHelper.QueryOptions<Choice>,
  ): Promise<Choice> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/choices/${choiceId}${buildOptions}`)
  }

  static createOne(values: Partial<Choice>): Promise<Choice> {
    return HttpService.api.post(`/v1/choices`, values)
  }

  static updateOne(choiceId: string, values: Partial<Choice>): Promise<Choice> {
    return HttpService.api.patch(`/v1/choices/${choiceId}`, values)
  }

  static deleteOne(choiceId: string): Promise<void> {
    return HttpService.api.delete(`/v1/choices/${choiceId}`)
  }

  static findManyByPlayerId(
    playerId: string,
    queryOptions?: ApiHelper.QueryOptions<Choice>,
  ): Promise<Choice[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/players/player/${playerId}/choices${buildOptions}`,
    )
  }

  static createOneByPlayerId(
    playerId: string,
    values: Partial<Choice>,
  ): Promise<Choice> {
    return HttpService.api.post(
      `/v1/players/player/${playerId}/choices`,
      values,
    )
  }

  static findManyByRoundId(
    roundId: string,
    queryOptions?: ApiHelper.QueryOptions<Choice>,
  ): Promise<Choice[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/rounds/round/${roundId}/choices${buildOptions}`,
    )
  }

  static createOneByRoundId(
    roundId: string,
    values: Partial<Choice>,
  ): Promise<Choice> {
    return HttpService.api.post(`/v1/rounds/round/${roundId}/choices`, values)
  }
}
