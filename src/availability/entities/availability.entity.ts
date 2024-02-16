import { ObjectType, Field, Int, ID, Float } from '@nestjs/graphql';
import { Business } from 'src/business/entities/business.entity';
import { dayOfWeek } from 'src/helpers/dayOfWeek.enum';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'availability' })
@ObjectType()
export class Availability {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  av_id: string;

  @Field(() => dayOfWeek)
  @Column({ enum: dayOfWeek })
  day_of_week: dayOfWeek;

  @Field(() => String)
  @Column('varchar')
  start_time: string;

  @Field(() => Float)
  @Column('float')
  duration: number;

  @Field(() => String)
  @ManyToOne(() => Business, (business) => business.business_id)
  // @Column('uuid')
  business_id: string;
}
