import { IsUUID } from 'class-validator';
import { CreateServiceInput } from './create-service.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateServiceInput extends PartialType(CreateServiceInput) {
  @Field(() => ID)
  @IsUUID()
  service_id: string;

  @Field(() => ID)
  @IsUUID()
  business_id: string;
}
