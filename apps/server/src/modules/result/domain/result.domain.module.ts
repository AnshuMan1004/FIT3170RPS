import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { ResultDomainFacade } from './result.domain.facade'
import { Result } from './result.model'

@Module({
  imports: [TypeOrmModule.forFeature([Result]), DatabaseHelperModule],
  providers: [ResultDomainFacade, ResultDomainFacade],
  exports: [ResultDomainFacade],
})
export class ResultDomainModule {}
