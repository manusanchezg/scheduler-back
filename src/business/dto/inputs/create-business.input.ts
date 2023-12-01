import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, Min, IsOptional } from 'class-validator';


@InputType()
export class CreateBusinessInput {
  @Field(()=> String)
  @IsNotEmpty()
  @Min(4)
  business_name: string;

  @Field(()=> String)
  @IsNotEmpty()
  business_address: string;

  @Field(()=> String)
  @IsOptional()
  business_description?: string;
  
  @Field(()=> String)
  @IsOptional()
  business_type?: string;

  @Field(()=> String)
  @IsNotEmpty()
  opening_hours: string;

  @Field(()=> String)
  @IsNotEmpty()
  closing_hours: string;
}
