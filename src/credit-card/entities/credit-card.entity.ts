import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'credit_card' })
@ObjectType()
export class CreditCard {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  cc_id: string;

  // @Column('uuid')
  @ManyToOne(() => User, user => user.user_id)
  @Field(() => String)
  @IsUUID()
  @IsNotEmpty()
  user_id: string;

  @Column('varchar')
  @Field(() => String)
  @IsNotEmpty()
  card_number: string;
  
  @Column('varchar')
  @Field(() => String)
  @IsNotEmpty()
  card_holder_name: string;
  
  @Column('date')
  @Field(() => Date)
  @IsNotEmpty()
  expiry_date: Date;
  
  @Column('int2')
  @Field(() => Number)
  @IsNotEmpty()
  cvv: number;
}
