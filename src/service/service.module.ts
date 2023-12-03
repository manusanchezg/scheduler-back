import { Module } from '@nestjs/common';
import { ServiceService } from './service.service';
import { ServiceResolver } from './service.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Service } from './entities/service.entity';

@Module({
  providers: [ServiceResolver, ServiceService],
  imports: [TypeOrmModule.forFeature([Service])]
})
export class ServiceModule {}
