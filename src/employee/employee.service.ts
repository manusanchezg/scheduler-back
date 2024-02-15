import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { UpdateEmployeeInput } from './dto/update-employee.input';
import { Employee } from './entities/employee.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}
  async create(createEmployeeInput: CreateEmployeeInput): Promise<Employee> {
    const newEmployee = this.employeeRepository.create(createEmployeeInput);
    return await this.employeeRepository.save(newEmployee);
  }

  async findAll(): Promise<Employee[]> {
    return await this.employeeRepository.find();
  }

  async findOne(id: string): Promise<Employee> {
    const employee = this.employeeRepository.findOneBy({
      employee_id: id,
    });
    if (!employee)
      throw new NotFoundException(`Employee with id #${id} not found`);

    return employee;
  }

  async update(
    id: string,
    updateEmployeeInput: UpdateEmployeeInput,
  ): Promise<Employee> {
    await this.findOne(id);
    const employee = await this.employeeRepository.preload(updateEmployeeInput);

    if (!employee)
      throw new NotFoundException(`Employee with id #${id} not found`);

    return this.employeeRepository.save(employee);
  }

  async remove(id: string): Promise<Employee> {
    const employee = this.findOne(id);
    await this.employeeRepository.softDelete(id);
    return { ...employee, employee_id: id };
  }
}
