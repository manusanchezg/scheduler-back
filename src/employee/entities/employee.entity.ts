import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsUUID } from 'class-validator';
import { Business } from 'src/business/entities/business.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'employee' })
@ObjectType()
export class Employee {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  employee_id: string;

  @Field(() => String)
  @Column('varchar')
  @IsNotEmpty()
  employee_name: string;
  
  @Field(() => String, { nullable: true })
  @Column('varchar', { nullable: true })
  @IsOptional()
  employee_position?: string;
  
  @Field(() => String)
  // @Column('varchar')
  @ManyToOne(() => Business, business => business.business_id)
  @IsNotEmpty()
  @IsUUID()
  business_id: string;
}
