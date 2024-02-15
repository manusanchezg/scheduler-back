import { IsUUID } from 'class-validator';
import { CreateEmployeeInput } from './create-employee.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateEmployeeInput extends PartialType(CreateEmployeeInput) {
  @Field(() => ID)
  @IsUUID()
  id: string;

  @Field(() => ID)
  @IsUUID()
  business_id: string;
}
