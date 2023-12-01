import { Injectable } from '@nestjs/common';
import { CreateBusinessInput, UpdateBusinessInput } from './dto/inputs';
import { Business } from './entities/business.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BusinessService {
  constructor(private readonly businessRepository: Repository<Business>) {}
  async create(createBusinessInput: CreateBusinessInput): Promise<Business> {
    const newBusiness = this.businessRepository.create(createBusinessInput);
    return await this.businessRepository.save(newBusiness);
  }

  findAll() {
    return `This action returns all business`;
  }

  findOne(id: number) {
    return `This action returns a #${id} business`;
  }

  update(id: number, updateBusinessInput: UpdateBusinessInput) {
    return `This action updates a #${id} business`;
  }

  remove(id: number) {
    return `This action removes a #${id} business`;
  }
}
