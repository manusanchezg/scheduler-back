import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID, IsDateString } from 'class-validator';

@InputType()
export class CreateAppointmentInput {
  @Field(() => String)
  @IsNotEmpty()
  @IsUUID()
  username: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsUUID()
  user_tel: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsUUID()
  business_id: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsUUID()
  service_id: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsUUID()
  employee_id: string;

  @Field(() => Date)
  @IsNotEmpty()
  @IsDateString()
  date_time: Date;
  
  @Field(() => String)
  status: "pending"
}
