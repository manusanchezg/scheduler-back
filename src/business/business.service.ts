import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBusinessInput, UpdateBusinessInput } from './dto/inputs';
import { Business } from './entities/business.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BusinessService {
  constructor(
    @InjectRepository(Business)
    private readonly businessRepository: Repository<Business>,
  ) {}
  async create(createBusinessInput: CreateBusinessInput): Promise<Business> {
    const newBusiness = this.businessRepository.create(createBusinessInput);
    return await this.businessRepository.save(newBusiness);
  }

  async findAll(): Promise<Business[]> {
    return await this.businessRepository.find();
  }

  async findOne(id: string): Promise<Business> {
    const business = this.businessRepository.findOneBy({
      business_id: id,
    });
    if (!business)
      throw new NotFoundException(`Business with id #${id} not found`);
    return business;
  }

  async update(
    id: string,
    updateBusinessInput: UpdateBusinessInput,
  ): Promise<Business> {
    await this.findOne(id);
    const business = await this.businessRepository.preload(updateBusinessInput);

    if (!business)
      throw new NotFoundException(`Business with id #${id} not found`);

    return this.businessRepository.save(business);
  }

  async remove(id: string): Promise<Business> {
    const business = this.findOne(id);
    await this.businessRepository.softDelete(id);
    return { ...business, business_id: id };
  }
}
