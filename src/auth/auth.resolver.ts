import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthResponse } from './dto/types/auth-response.type';
import { LoginInput, SignupInput } from './dto/inputs';
import { User } from 'src/user/entities/user.entity';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { UseGuards } from "@nestjs/common";
import { CurrentUser } from './decorators/current-user.decorator';
import { ValidRoles } from './enums/valid-roles.enum';

@Resolver(() => AuthResponse)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthResponse, { name: 'signup' })
  async signup(
    @Args('signupInput') signupInput: SignupInput,
  ): Promise<AuthResponse> {
    return this.authService.signup(signupInput);
  }

  @Mutation(() => AuthResponse, { name: 'login' })
  async login(@Args('loginInput') loginInput: LoginInput): Promise<AuthResponse> {
    return this.authService.login(loginInput);
  }

  @Query(() => AuthResponse, {name: "revalidate"})
  @UseGuards(JwtAuthGuard)
  revalidateToken(
    @CurrentUser([ValidRoles.admin]) user: User
  ): AuthResponse {
    return this.authService.revalidateToken(user)

  }
}
