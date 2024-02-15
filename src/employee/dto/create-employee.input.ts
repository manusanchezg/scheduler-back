import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID, MinLength } from 'class-validator';
import { ManyToOne } from 'typeorm';

@InputType()
export class CreateEmployeeInput {
  @Field(() => String)
  @IsNotEmpty()
  @MinLength(4)
  employee_name: string;

  @Field(() => String)
  @IsNotEmpty()
  employee_position: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsUUID()
  business_id: string;
}
