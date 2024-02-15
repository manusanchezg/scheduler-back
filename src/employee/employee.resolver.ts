import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { EmployeeService } from './employee.service';
import { Employee } from './entities/employee.entity';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { UpdateEmployeeInput } from './dto/update-employee.input';

@Resolver(() => Employee)
export class EmployeeResolver {
  constructor(private readonly employeeService: EmployeeService) {}

  @Mutation(() => Employee)
  async createEmployee(
    @Args('createEmployeeInput') createEmployeeInput: CreateEmployeeInput,
  ): Promise<Employee> {
    return await this.employeeService.create(createEmployeeInput);
  }

  @Query(() => [Employee], { name: 'employee' })
  async findAll(): Promise<Employee[]> {
    return await this.employeeService.findAll();
  }

  @Query(() => Employee, { name: 'employee' })
  async findOne(@Args('id', { type: () => ID }) id: string): Promise<Employee> {
    return await this.employeeService.findOne(id);
  }

  @Mutation(() => Employee)
  async updateEmployee(
    @Args('updateEmployeeInput') updateEmployeeInput: UpdateEmployeeInput,
  ): Promise<Employee> {
    return await this.employeeService.update(
      updateEmployeeInput.id,
      updateEmployeeInput,
    );
  }

  @Mutation(() => Employee)
  async removeEmployee(
    @Args('id', { type: () => Int }) id: string,
  ): Promise<Employee> {
    return await this.employeeService.remove(id);
  }
}
