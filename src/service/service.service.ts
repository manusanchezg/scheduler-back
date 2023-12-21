import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateServiceInput } from './dto/create-service.input';
import { UpdateServiceInput } from './dto/update-service.input';
import { Service } from './entities/service.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ServiceService {
  constructor(
    @InjectRepository(Service)
    private readonly serviceRepository: Repository<Service>,
  ) {}
  async create(createServiceInput: CreateServiceInput): Promise<Service> {
    const newService = this.serviceRepository.create(createServiceInput);
    return await this.serviceRepository.save(newService);
  }

  async findAll(): Promise<Service[]> {
    return await this.serviceRepository.find();
  }

  async findOne(id: string): Promise<Service> {
    const service = this.serviceRepository.findOneBy({
      service_id: id,
    });
    if (!service)
      throw new NotFoundException(`Service with id #${id} not found`);

    return service;
  }

  async update(
    id: string,
    updateServiceInput: UpdateServiceInput,
  ): Promise<Service> {
    await this.findOne(id);
    const service = await this.serviceRepository.preload(updateServiceInput);

    if (!service)
      throw new NotFoundException(`Service with id #${id} not found`);

    return this.serviceRepository.save(service);
  }

  async remove(id: string): Promise<Service> {
    const service = this.findOne(id);
    await this.serviceRepository.softDelete(id);
    return { ...service, service_id: id };
  }
}
