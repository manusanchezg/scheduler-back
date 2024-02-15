import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateAvailabilityInput, CreateAvailabilityInput } from './dto/inputs';
import { InjectRepository } from '@nestjs/typeorm';
import { Availability } from './entities/availability.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AvailabilityService {
  constructor(
    @InjectRepository(Availability)
    private readonly availabilityRepository: Repository<Availability>,
  ) {}
  async create(
    createAvailabilityInput: CreateAvailabilityInput,
  ): Promise<Availability> {
    const newAvailability = this.availabilityRepository.create(
      createAvailabilityInput,
    );
    return await this.availabilityRepository.save(newAvailability);
  }

  async findAll(): Promise<Availability[]> {
    return await this.availabilityRepository.find();
  }

  async findOne(id: string): Promise<Availability> {
    const availability = this.availabilityRepository.findOneBy({
      av_id: id,
    });
    if (!availability)
      throw new NotFoundException(`Availability with id #${id} not found`);

    return availability;
  }

  async update(
    id: string,
    updateAvailabilityInput: UpdateAvailabilityInput,
  ): Promise<Availability> {
    await this.findOne(id);
    return await this.availabilityRepository.preload(updateAvailabilityInput);
  }

  async remove(id: string): Promise<Availability> {
    const availability = this.findOne(id);
    await this.availabilityRepository.softDelete(id);
    return { ...availability, av_id: id };
  }
}
