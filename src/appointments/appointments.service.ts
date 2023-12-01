import { Injectable } from '@nestjs/common';
import { CreateAppointmentInput, UpdateAppointmentInput } from './dto/inputs';
import { Appointment } from './entities/appointment.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class AppointmentsService {
  constructor(
    @InjectRepository(Appointment)
    private readonly appointmentsRepository: Repository<Appointment>
  ) {}
  async create(createAppointmentInput: CreateAppointmentInput): Promise<Appointment> {
    const newAppointment = this.appointmentsRepository.create(createAppointmentInput)
    return await this.appointmentsRepository.save(newAppointment)
  }

  findAll() {
    return `This action returns all appointments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} appointment`;
  }

  update(id: number, updateAppointmentInput: UpdateAppointmentInput) {
    return `This action updates a #${id} appointment`;
  }

  remove(id: number) {
    return `This action removes a #${id} appointment`;
  }
}
