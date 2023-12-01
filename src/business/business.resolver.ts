import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BusinessService } from './business.service';
import { Business } from './entities/business.entity';
import { CreateBusinessInput, UpdateBusinessInput } from './dto/inputs';

@Resolver(() => Business)
export class BusinessResolver {
  constructor(private readonly businessService: BusinessService) {}

  @Mutation(() => Business)
  async createBusiness(
    @Args('createBusinessInput') createBusinessInput: CreateBusinessInput,
  ): Promise<Business> {
    return this.businessService.create(createBusinessInput);
  }

  @Query(() => [Business], { name: 'getBusinesses' })
  async findAll(): Promise<Business[]> {
    return await this.businessService.findAll();
  }

  @Query(() => Business, { name: 'business' })
  async findOne(
    @Args('id', { type: () => String }) id: string,
  ): Promise<Business> {
    return await this.businessService.findOne(id);
  }

  @Mutation(() => Business)
  async updateBusiness(
    @Args('updateBusinessInput') updateBusinessInput: UpdateBusinessInput,
  ): Promise<Business> {
    return await this.businessService.update(
      updateBusinessInput.business_id,
      updateBusinessInput,
    );
  }

  @Mutation(() => Business)
  async removeBusiness(
    @Args('id', { type: () => Int }) id: string,
  ): Promise<Business> {
    return await this.businessService.remove(id);
  }
}
