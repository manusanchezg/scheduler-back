import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'business' })
@ObjectType()
export class Business {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  business_id: string;

  @Column('varchar')
  @Field(() => String)
  business_name: string;

  @Column('varchar')
  @Field(() => String)
  business_address: string;

  @Column('varchar', { nullable: true })
  @Field(() => String, { nullable: true })
  business_description?: string;

  @Column('varchar', { nullable: true })
  @Field(() => String, { nullable: true })
  business_type?: string;

  @Column('varchar')
  @Field(() => String)
  opening_hours: string;

  @Column('varchar')
  @Field(() => String)
  closing_hours: string;
}
