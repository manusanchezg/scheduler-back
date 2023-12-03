import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsPhoneNumber } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
@ObjectType()
export class User {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  user_id: string;

  @Field(() => String)
  @Column('varchar')
  @IsNotEmpty()
  username: string;

  @Field(() => String)
  @Column('varchar')
  @IsNotEmpty()
  password: string;

  @Field(() => String)
  @Column('varchar')
  @IsEmail()
  email: string;

  @Field(() => String)
  @Column('varchar')
  @IsPhoneNumber()
  phone_number: string;
}
