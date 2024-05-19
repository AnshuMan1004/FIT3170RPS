import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { Round } from './round.model'

import { Game } from '../../game/domain'

@Injectable()
export class RoundDomainFacade {
  constructor(
    @InjectRepository(Round)
    private repository: Repository<Round>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<Round>): Promise<Round> {
    return this.repository.save(values)
  }

  async update(item: Round, values: Partial<Round>): Promise<Round> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: Round): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<Round> = {},
  ): Promise<Round[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<Round> = {},
  ): Promise<Round> {
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

  async findManyByGame(
    item: Game,
    queryOptions: RequestHelper.QueryOptions<Round> = {},
  ): Promise<Round[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('game')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        gameId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }
}
