import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AvailabilityService } from './availability.service';
import { Availability } from './entities/availability.entity';
import { UpdateAvailabilityInput, CreateAvailabilityInput } from './dto/inputs';

@Resolver(() => Availability)
export class AvailabilityResolver {
  constructor(private readonly availabilityService: AvailabilityService) {}

  @Mutation(() => Availability)
  createAvailability(
    @Args('createAvailabilityInput')
    createAvailabilityInput: CreateAvailabilityInput,
  ) {
    return this.availabilityService.create(createAvailabilityInput);
  }

  @Query(() => [Availability], { name: 'availability' })
  findAll() {
    return this.availabilityService.findAll();
  }

  @Query(() => Availability, { name: 'availability' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.availabilityService.findOne(id);
  }

  @Mutation(() => Availability)
  updateAvailability(
    @Args('updateAvailabilityInput')
    updateAvailabilityInput: UpdateAvailabilityInput,
  ) {
    return this.availabilityService.update(
      updateAvailabilityInput.id,
      updateAvailabilityInput,
    );
  }

  @Mutation(() => Availability)
  removeAvailability(@Args('id', { type: () => Int }) id: number) {
    return this.availabilityService.remove(id);
  }
}
