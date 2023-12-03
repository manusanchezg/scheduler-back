import { Module } from '@nestjs/common';
import { CreditCardService } from './credit-card.service';
import { CreditCardResolver } from './credit-card.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreditCard } from './entities/credit-card.entity';

@Module({
  providers: [CreditCardResolver, CreditCardService],
  imports: [TypeOrmModule.forFeature([CreditCard])]
})
export class CreditCardModule {}
