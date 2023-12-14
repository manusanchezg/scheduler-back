import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Business } from 'src/business/entities/business.entity';
import { Employee } from 'src/employee/entities/employee.entity';
import { Service } from 'src/service/entities/service.entity';

@Entity({ name: 'appointments' })
@ObjectType()
export class Appointment {
  @PrimaryColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column('varchar')
  @Field(() => String)
  username: string;

  @Column('varchar')
  @Field(() => String)
  user_tel: string;

  // @Column('uuid')
  @ManyToOne(() => Business, (business) => business.business_id)
  @Field(() => String)
  business_id: string;

  // @Column('uuid')
  @ManyToOne(() => Service, (service) => service.service_id)
  @Field(() => String)
  service_id: string;

  // @Column('uuid')
  @ManyToOne(() => Employee, (employee) => employee.employee_id)
  @Field(() => String)
  employee_id: string;

  @Column('date')
  @Field(() => Date)
  date_time: Date;

  @Column({
    enum: ['approved', 'canceled', 'postponed', 'pending'],
  })
  @Field(() => [String])
  status: 'approved' | 'canceled' | 'postponed' | 'pending';
}
