import { Module } from '@nestjs/common';
import { CreditCardService } from './credit-card.service';
import { CreditCardResolver } from './credit-card.resolver';

@Module({
  providers: [CreditCardResolver, CreditCardService]
})
export class CreditCardModule {}
