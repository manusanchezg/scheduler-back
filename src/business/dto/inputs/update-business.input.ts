import { IsNotEmpty, IsOptional, IsUUID, Min } from 'class-validator';
import { CreateBusinessInput } from './create-business.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateBusinessInput extends PartialType(CreateBusinessInput) {
  @Field(() => ID)
  @IsNotEmpty()
  @IsUUID()
  business_id: string;

  @Field(() => String)
  @IsOptional()
  @Min(4)
  business_name?: string;

  @Field(() => String)
  @IsOptional()
  business_address?: string;

  @Field(() => String)
  @IsOptional()
  business_description?: string;

  @Field(() => String)
  @IsOptional()
  business_type?: string;

  @Field(() => String)
  @IsOptional()
  opening_hours?: string;

  @Field(() => String)
  @IsOptional()
  closing_hours?: string;
}
