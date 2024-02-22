import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID, IsDateString } from 'class-validator';
import { AppointmentStatus } from 'src/helpers/AppointmentStatus.enum';

@InputType()
export class CreateAppointmentInput {
  @Field(() => String)
  @IsNotEmpty()
  username: string;

  @Field(() => String)
  @IsNotEmpty()
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

  @Field(() => AppointmentStatus, {
    nullable: true,
    defaultValue: AppointmentStatus.PENDING,
  })
  status?: AppointmentStatus = AppointmentStatus.PENDING;
}
