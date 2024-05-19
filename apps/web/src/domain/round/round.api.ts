import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Round } from './round.model'

export class RoundApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Round>,
  ): Promise<Round[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/rounds${buildOptions}`)
  }

  static findOne(
    roundId: string,
    queryOptions?: ApiHelper.QueryOptions<Round>,
  ): Promise<Round> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/rounds/${roundId}${buildOptions}`)
  }

  static createOne(values: Partial<Round>): Promise<Round> {
    return HttpService.api.post(`/v1/rounds`, values)
  }

  static updateOne(roundId: string, values: Partial<Round>): Promise<Round> {
    return HttpService.api.patch(`/v1/rounds/${roundId}`, values)
  }

  static deleteOne(roundId: string): Promise<void> {
    return HttpService.api.delete(`/v1/rounds/${roundId}`)
  }

  static findManyByGameId(
    gameId: string,
    queryOptions?: ApiHelper.QueryOptions<Round>,
  ): Promise<Round[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/games/game/${gameId}/rounds${buildOptions}`)
  }

  static createOneByGameId(
    gameId: string,
    values: Partial<Round>,
  ): Promise<Round> {
    return HttpService.api.post(`/v1/games/game/${gameId}/rounds`, values)
  }
}
