import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { Choice } from './choice.model'

import { Player } from '../../player/domain'

import { Round } from '../../round/domain'

@Injectable()
export class ChoiceDomainFacade {
  constructor(
    @InjectRepository(Choice)
    private repository: Repository<Choice>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<Choice>): Promise<Choice> {
    return this.repository.save(values)
  }

  async update(item: Choice, values: Partial<Choice>): Promise<Choice> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: Choice): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<Choice> = {},
  ): Promise<Choice[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<Choice> = {},
  ): Promise<Choice> {
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

  async findManyByPlayer(
    item: Player,
    queryOptions: RequestHelper.QueryOptions<Choice> = {},
  ): Promise<Choice[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('player')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        playerId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }

  async findManyByRound(
    item: Round,
    queryOptions: RequestHelper.QueryOptions<Choice> = {},
  ): Promise<Choice[]> {
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
}
