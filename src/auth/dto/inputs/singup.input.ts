import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsPhoneNumber, MinLength } from 'class-validator';

@InputType()
export class SignupInput {
  @Field(() => String)
  @IsEmail()
  email: string;

  @Field(() => String)
  @IsNotEmpty()
  username: string;

  @Field(() => String)
  @MinLength(6)
  password: string;

  @Field(() => String)
  @IsPhoneNumber()
  phone_number: string;
}
