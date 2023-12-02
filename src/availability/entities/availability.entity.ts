import { ObjectType, Field, Int, ID, Float } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
  @Column('uuid')
  business_id: string;
}
