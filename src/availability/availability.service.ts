import { Injectable } from '@nestjs/common';
import { UpdateAvailabilityInput, CreateAvailabilityInput } from './dto/inputs';

@Injectable()
export class AvailabilityService {
  create(createAvailabilityInput: CreateAvailabilityInput) {
    return 'This action adds a new availability';
  }

  findAll() {
    return `This action returns all availability`;
  }

  findOne(id: number) {
    return `This action returns a #${id} availability`;
  }

  update(id: number, updateAvailabilityInput: UpdateAvailabilityInput) {
    return `This action updates a #${id} availability`;
  }

  remove(id: number) {
    return `This action removes a #${id} availability`;
  }
}
