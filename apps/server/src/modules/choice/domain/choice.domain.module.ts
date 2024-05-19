import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { ChoiceDomainFacade } from './choice.domain.facade'
import { Choice } from './choice.model'

@Module({
  imports: [TypeOrmModule.forFeature([Choice]), DatabaseHelperModule],
  providers: [ChoiceDomainFacade, ChoiceDomainFacade],
  exports: [ChoiceDomainFacade],
})
export class ChoiceDomainModule {}
