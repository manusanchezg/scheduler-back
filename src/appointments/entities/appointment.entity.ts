import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

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

  @Column('uuid')
  @Field(() => String)
  business_id: string;

  @Column('uuid')
  @Field(() => String)
  service_id: string;

  @Column('uuid')
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
