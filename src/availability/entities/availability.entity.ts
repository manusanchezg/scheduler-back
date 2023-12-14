import { ObjectType, Field, Int, ID, Float } from '@nestjs/graphql';
import { Business } from 'src/business/entities/business.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'availability' })
@ObjectType()
export class Availability {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  av_id: string;

  @Field(() => String)
  @Column({
    enum: [
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
      'sunday',
    ],
  })
  day_of_week:
    | 'monday'
    | 'tuesday'
    | 'wednesday'
    | 'thursday'
    | 'friday'
    | 'saturday'
    | 'sunday';

  @Field(() => String)
  @Column('varchar')
  start_time: string;

  @Field(() => Float)
  @Column('float')
  duration: number;

  @Field(() => String)
  // @Column('uuid')
  @ManyToOne(() => Business, business => business.business_id)
  business_id: string;
}
