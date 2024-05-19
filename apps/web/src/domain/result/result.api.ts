import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Result } from './result.model'

export class ResultApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Result>,
  ): Promise<Result[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/results${buildOptions}`)
  }

  static findOne(
    resultId: string,
    queryOptions?: ApiHelper.QueryOptions<Result>,
  ): Promise<Result> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/results/${resultId}${buildOptions}`)
  }

  static createOne(values: Partial<Result>): Promise<Result> {
    return HttpService.api.post(`/v1/results`, values)
  }

  static updateOne(resultId: string, values: Partial<Result>): Promise<Result> {
    return HttpService.api.patch(`/v1/results/${resultId}`, values)
  }

  static deleteOne(resultId: string): Promise<void> {
    return HttpService.api.delete(`/v1/results/${resultId}`)
  }

  static findManyByRoundId(
    roundId: string,
    queryOptions?: ApiHelper.QueryOptions<Result>,
  ): Promise<Result[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/rounds/round/${roundId}/results${buildOptions}`,
    )
  }

  static createOneByRoundId(
    roundId: string,
    values: Partial<Result>,
  ): Promise<Result> {
    return HttpService.api.post(`/v1/rounds/round/${roundId}/results`, values)
  }

  static findManyByWinnerPlayerId(
    winnerPlayerId: string,
    queryOptions?: ApiHelper.QueryOptions<Result>,
  ): Promise<Result[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/players/winnerPlayer/${winnerPlayerId}/results${buildOptions}`,
    )
  }

  static createOneByWinnerPlayerId(
    winnerPlayerId: string,
    values: Partial<Result>,
  ): Promise<Result> {
    return HttpService.api.post(
      `/v1/players/winnerPlayer/${winnerPlayerId}/results`,
      values,
    )
  }
}
