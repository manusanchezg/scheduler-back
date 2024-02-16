import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Business } from 'src/business/entities/business.entity';
import { Employee } from 'src/employee/entities/employee.entity';
import { Service } from 'src/service/entities/service.entity';
import { AppointmentStatus } from 'src/helpers/AppointmentStatus.enum';

@Entity({ name: 'appointments' })
@ObjectType()
export class Appointment {
  @PrimaryGeneratedColumn('uuid')
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

  @Column('timestamp')
  @Field(() => Date)
  date_time: Date;

  @Column({
    enum: AppointmentStatus,
    nullable: true,
    default: AppointmentStatus.PENDING,
  })
  @Field(() => AppointmentStatus, {
    defaultValue: AppointmentStatus.PENDING,
    nullable: true,
  })
  status?: AppointmentStatus = AppointmentStatus.PENDING;
}
