import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { Result } from './result.model'

import { Round } from '../../round/domain'

import { Player } from '../../player/domain'

@Injectable()
export class ResultDomainFacade {
  constructor(
    @InjectRepository(Result)
    private repository: Repository<Result>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<Result>): Promise<Result> {
    return this.repository.save(values)
  }

  async update(item: Result, values: Partial<Result>): Promise<Result> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: Result): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<Result> = {},
  ): Promise<Result[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<Result> = {},
  ): Promise<Result> {
    if (!id) {
      this.databaseHelper.invalidQueryWhere('id')
    }

    const queryOptionsEnsured = {
      includes: queryOptions?.includes,
      filters: {
        id: id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    const item = await query.getOne()

    if (!item) {
      this.databaseHelper.notFoundByQuery(queryOptionsEnsured.filters)
    }

    return item
  }

  async findManyByRound(
    item: Round,
    queryOptions: RequestHelper.QueryOptions<Result> = {},
  ): Promise<Result[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('round')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        roundId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }

  async findManyByWinnerPlayer(
    item: Player,
    queryOptions: RequestHelper.QueryOptions<Result> = {},
  ): Promise<Result[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('winnerPlayer')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        winnerPlayerId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }
}
