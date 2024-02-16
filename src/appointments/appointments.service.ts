import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAppointmentInput, UpdateAppointmentInput } from './dto/inputs';
import { Appointment } from './entities/appointment.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppointmentsService {
  constructor(
    @InjectRepository(Appointment)
    private readonly appointmentsRepository: Repository<Appointment>,
  ) {}
  async create(
    createAppointmentInput: CreateAppointmentInput,
  ): Promise<Appointment> {
    const newAppointment = this.appointmentsRepository.create(
      createAppointmentInput,
    );
    return await this.appointmentsRepository.save(newAppointment);
  }

  async findAll(): Promise<Appointment[]> {
    return await this.appointmentsRepository.find();
  }

  async findOneById(id: string): Promise<Appointment> {
    const appointment = this.appointmentsRepository.findOneBy({
      id,
    });
    if (!appointment)
      throw new NotFoundException(`Appointment with id #${id} not found`);
    return appointment;
  }

  async update(
    id: string,
    updateAppointmentInput: UpdateAppointmentInput,
  ): Promise<Appointment> {
    await this.findOneById(id);
    const appointment = await this.appointmentsRepository.preload(
      updateAppointmentInput,
    );

    if (!appointment) {
      throw new NotFoundException(`Appointment with id #${id} not found`);
    }
    console.log(appointment);

    return this.appointmentsRepository.save(appointment);
  }

  remove(id: string) {
    return `This action removes a #${id} appointment`;
  }
}
