import { Module } from '@nestjs/common';
import { BusinessService } from './business.service';
import { BusinessResolver } from './business.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Business } from './entities/business.entity';

@Module({
  providers: [BusinessResolver, BusinessService],
  imports: [TypeOrmModule.forFeature([Business])],
})
export class BusinessModule {}
