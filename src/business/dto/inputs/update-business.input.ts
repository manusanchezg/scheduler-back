import { IsNotEmpty, IsOptional, IsUUID, Min } from 'class-validator';
import { CreateBusinessInput } from './create-business.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateBusinessInput extends PartialType(CreateBusinessInput) {
  @Field(() => ID)
  @IsNotEmpty()
  @IsUUID()
  business_id: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  // @Min(4)
  business_name?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  business_address?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  business_description?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  business_type?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  opening_hours?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  closing_hours?: string;
}
