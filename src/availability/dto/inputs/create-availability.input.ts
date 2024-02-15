import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID, Min } from 'class-validator';
import { dayOfWeek } from 'src/helpers/dayOfWeek.enum';

@InputType()
export class CreateAvailabilityInput {
  @Field(() => dayOfWeek)
  @IsNotEmpty()
  day_of_week: dayOfWeek;

  @Field(() => String)
  @IsNotEmpty()
  start_time: string;

  @Field(() => Number)
  @IsNotEmpty()
  @Min(0)
  duration: number;

  @Field(() => String)
  @IsNotEmpty()
  @IsUUID()
  business_id: string;
}
