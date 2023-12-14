import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsUUID, MinLength } from 'class-validator';

@InputType()
export class CreateServiceInput {
  @Field(() => String)
  @IsNotEmpty()
  @MinLength(4)
  service_name: string;

  @Field(() => Number)
  @IsNotEmpty()
  service_duration: number;

  @Field(() => Number)
  @IsNotEmpty()
  service_price: number;

  @Field(() => String, { nullable: true })
  @IsOptional()
  service_description?: string;
  
  @Field(() => String)
  @IsNotEmpty()
  @IsUUID()
  business_id: string;
}
