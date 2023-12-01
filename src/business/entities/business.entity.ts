import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, PrimaryColumn } from 'typeorm';

@ObjectType()
export class Business {
  @PrimaryColumn('uuid')
  @Field(() => ID)
  business_id: string;

  @Column('varchar')
  @Field(() => String)
  business_name: string;

  @Column('varchar')
  @Field(() => String)
  business_address: string;

  @Column('varchar')
  @Field(() => String)
  business_description: string;

  @Column('varchar')
  @Field(() => String)
  business_type: string;

  @Column('varchar')
  @Field(() => String)
  opening_hours: string;

  @Column('varchar')
  @Field(() => String)
  closing_hours: string;
}
