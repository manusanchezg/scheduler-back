import { Test, TestingModule } from '@nestjs/testing';
import { CreditCardResolver } from './credit-card.resolver';
import { CreditCardService } from './credit-card.service';

describe('CreditCardResolver', () => {
  let resolver: CreditCardResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreditCardResolver, CreditCardService],
    }).compile();

    resolver = module.get<CreditCardResolver>(CreditCardResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
