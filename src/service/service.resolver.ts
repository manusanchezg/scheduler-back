import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ServiceService } from './service.service';
import { Service } from './entities/service.entity';
import { CreateServiceInput } from './dto/create-service.input';
import { UpdateServiceInput } from './dto/update-service.input';

@Resolver(() => Service)
export class ServiceResolver {
  constructor(private readonly serviceService: ServiceService) {}

  @Mutation(() => Service)
  async createService(
    @Args('createServiceInput') createServiceInput: CreateServiceInput,
  ): Promise<Service> {
    return await this.serviceService.create(createServiceInput);
  }

  @Query(() => [Service], { name: 'services' })
  async findAll(): Promise<Service[]> {
    return await this.serviceService.findAll();
  }

  @Query(() => Service, { name: 'service' })
  async findOneById(
    @Args('id', { type: () => Int }) id: string,
  ): Promise<Service> {
    return await this.serviceService.findOne(id);
  }

  @Mutation(() => Service)
  async updateService(
    @Args('updateServiceInput') updateServiceInput: UpdateServiceInput,
  ): Promise<Service> {
    return await this.serviceService.update(
      updateServiceInput.service_id,
      updateServiceInput,
    );
  }

  @Mutation(() => Service)
  async removeService(
    @Args('id', { type: () => Int }) id: string,
  ): Promise<Service> {
    return await this.serviceService.remove(id);
  }
}
