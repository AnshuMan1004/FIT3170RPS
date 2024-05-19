import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Player } from './player.model'

export class PlayerApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Player>,
  ): Promise<Player[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/players${buildOptions}`)
  }

  static findOne(
    playerId: string,
    queryOptions?: ApiHelper.QueryOptions<Player>,
  ): Promise<Player> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/players/${playerId}${buildOptions}`)
  }

  static createOne(values: Partial<Player>): Promise<Player> {
    return HttpService.api.post(`/v1/players`, values)
  }

  static updateOne(playerId: string, values: Partial<Player>): Promise<Player> {
    return HttpService.api.patch(`/v1/players/${playerId}`, values)
  }

  static deleteOne(playerId: string): Promise<void> {
    return HttpService.api.delete(`/v1/players/${playerId}`)
  }

  static findManyByUserId(
    userId: string,
    queryOptions?: ApiHelper.QueryOptions<Player>,
  ): Promise<Player[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/user/${userId}/players${buildOptions}`,
    )
  }

  static createOneByUserId(
    userId: string,
    values: Partial<Player>,
  ): Promise<Player> {
    return HttpService.api.post(`/v1/users/user/${userId}/players`, values)
  }

  static findManyByGameId(
    gameId: string,
    queryOptions?: ApiHelper.QueryOptions<Player>,
  ): Promise<Player[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/games/game/${gameId}/players${buildOptions}`,
    )
  }

  static createOneByGameId(
    gameId: string,
    values: Partial<Player>,
  ): Promise<Player> {
    return HttpService.api.post(`/v1/games/game/${gameId}/players`, values)
  }
}
