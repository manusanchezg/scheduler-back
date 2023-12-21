import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { UpdateUserInput } from './dto/update-user.input';
import { ValidRolesArgs } from './dto/args/roles.arg';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User], { name: 'users' })
  async findAll(
    @Args() validRoles: ValidRolesArgs
  ): Promise<User[]> {
    return await this.userService.findAll();
  }

  //TODO Implement
  // @Query(() => User, { name: 'user' })
  // async findOne(@Args('id', { type: () => ID }) id: string): Promise<User> {
  //   return await this.userService.findOne(id);
  // }

  @Mutation(() => User)
  async blockUser(@Args('id', { type: () => ID }) id: string): Promise<User> {
    return await this.userService.block(id);
  }
}
