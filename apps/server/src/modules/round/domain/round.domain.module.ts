import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { RoundDomainFacade } from './round.domain.facade'
import { Round } from './round.model'

@Module({
  imports: [TypeOrmModule.forFeature([Round]), DatabaseHelperModule],
  providers: [RoundDomainFacade, RoundDomainFacade],
  exports: [RoundDomainFacade],
})
export class RoundDomainModule {}
