import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { AvailabilityService } from './availability.service';
import { Availability } from './entities/availability.entity';
import { UpdateAvailabilityInput, CreateAvailabilityInput } from './dto/inputs';

@Resolver(() => Availability)
export class AvailabilityResolver {
  constructor(private readonly availabilityService: AvailabilityService) {}

  @Mutation(() => Availability)
  async createAvailability(
    @Args('createAvailabilityInput')
    createAvailabilityInput: CreateAvailabilityInput,
  ): Promise<Availability> {
    return this.availabilityService.create(createAvailabilityInput);
  }

  @Query(() => [Availability], { name: 'availabilities' })
  async findAll(): Promise<Availability[]> {
    return await this.availabilityService.findAll();
  }

  @Query(() => Availability, { name: 'availability' })
  async findOne(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<Availability> {
    return await this.availabilityService.findOne(id);
  }

  @Mutation(() => Availability)
  async updateAvailability(
    @Args('updateAvailabilityInput')
    updateAvailabilityInput: UpdateAvailabilityInput,
  ): Promise<Availability> {
    return await this.availabilityService.update(
      updateAvailabilityInput.id,
      updateAvailabilityInput,
    );
  }

  @Mutation(() => Availability)
  async removeAvailability(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<Availability> {
    return await this.availabilityService.remove(id);
  }
}
