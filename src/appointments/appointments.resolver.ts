import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AppointmentsService } from './appointments.service';
import { Appointment } from './entities/appointment.entity';
import { CreateAppointmentInput, UpdateAppointmentInput } from './dto/inputs';

@Resolver(() => Appointment)
export class AppointmentsResolver {
  constructor(private readonly appointmentsService: AppointmentsService) {}

  @Mutation(() => Appointment)
  async createAppointment(
    @Args('createAppointmentInput')
    createAppointmentInput: CreateAppointmentInput,
  ): Promise<Appointment> {
    return this.appointmentsService.create(createAppointmentInput);
  }

  @Query(() => [Appointment], { name: 'appointments' })
  findAll() {
    return this.appointmentsService.findAll();
  }

  @Query(() => Appointment, { name: 'appointment' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.appointmentsService.findOne(id);
  }

  @Mutation(() => Appointment)
  updateAppointment(
    @Args('updateAppointmentInput')
    updateAppointmentInput: UpdateAppointmentInput,
  ) {
    return this.appointmentsService.update(
      updateAppointmentInput.id,
      updateAppointmentInput,
    );
  }

  @Mutation(() => Appointment)
  removeAppointment(@Args('id', { type: () => Int }) id: number) {
    return this.appointmentsService.remove(id);
  }
}
