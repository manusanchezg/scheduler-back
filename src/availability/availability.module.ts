import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AvailabilityService } from './availability.service';
import { AvailabilityResolver } from './availability.resolver';
import { Availability } from './entities/availability.entity';

@Module({
  providers: [AvailabilityResolver, AvailabilityService],
  imports: [TypeOrmModule.forFeature([Availability])]
})
export class AvailabilityModule {}
