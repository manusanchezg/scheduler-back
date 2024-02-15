import { ObjectType, Field, Int, ID, Float } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsUUID } from 'class-validator';
import { Business } from '../../business/entities/business.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'services' })
@ObjectType()
export class Service {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  service_id: string;

  @Column('varchar')
  @Field(() => String)
  @IsNotEmpty()
  service_name: string;

  @Column('float')
  @Field(() => Float)
  @IsNotEmpty()
  service_duration: number;

  @Column('float')
  @Field(() => Float)
  @IsNotEmpty()
  service_price: number;

  @Column('varchar', { nullable: true })
  @Field(() => String, { nullable: true })
  @IsOptional()
  service_description?: string;

  @ManyToOne(() => Business, (business) => business.business_id)
  // @Column('varchar')
  @Field(() => String)
  @IsUUID()
  business_id: string;
}
