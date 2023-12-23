import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
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
  async findAll(): Promise<Appointment[]> {
    return await this.appointmentsService.findAll();
  }

  @Query(() => Appointment, { name: 'appointment' })
  async findOne(@Args('id', { type: () => ID }) id: string): Promise<Appointment> {
    return await this.appointmentsService.findOneById(id);
  }

  @Mutation(() => Appointment)
  async updateAppointment(
    @Args('updateAppointmentInput')
    updateAppointmentInput: UpdateAppointmentInput,
  ): Promise<Appointment> {
    return await this.appointmentsService.update(
      updateAppointmentInput.id,
      updateAppointmentInput,
    );
  }

  @Mutation(() => Appointment)
  removeAppointment(@Args('id', { type: () => ID }) id: string) {
    return this.appointmentsService.remove(id);
  }
}
