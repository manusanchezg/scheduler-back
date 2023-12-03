import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsPhoneNumber } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
@ObjectType()
export class User {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  user_id: string;

  @Field(() => String)
  @Column('varchar', { unique: true })
  @IsNotEmpty()
  username: string;

  // @Field(() => String)
  @Column('varchar')
  @IsNotEmpty()
  password: string;

  @Field(() => String)
  @Column('varchar')
  @IsEmail()
  email: string;

  @Field(() => String)
  @Column('varchar', { unique: true })
  @IsPhoneNumber()
  phone_number: string;

  @Field(() => Boolean)
  @Column({
    type: 'boolean',
    default: true,
  })
  isBlocked: boolean;
}
