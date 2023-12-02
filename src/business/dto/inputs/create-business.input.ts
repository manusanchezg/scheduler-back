import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, MinLength, IsOptional } from 'class-validator';

@InputType()
export class CreateBusinessInput {
  @Field(() => String)
  @IsNotEmpty()
  @MinLength(4)
  business_name: string;

  @Field(() => String)
  @IsNotEmpty()
  business_address: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  business_description?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  business_type?: string;

  @Field(() => String)
  @IsNotEmpty()
  opening_hours: string;

  @Field(() => String)
  @IsNotEmpty()
  closing_hours: string;
}
