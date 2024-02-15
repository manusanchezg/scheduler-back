import { CreateAvailabilityInput } from './create-availability.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateAvailabilityInput extends PartialType(CreateAvailabilityInput) {
  @Field(() => ID)
  id: string;
}
