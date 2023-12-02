import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAvailabilityInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
