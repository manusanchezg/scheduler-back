import { CreateAppointmentInput } from './create-appointment.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateAppointmentInput extends PartialType(CreateAppointmentInput) {
  @Field(() => ID)
  id: string;
}
