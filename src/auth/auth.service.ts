import { Injectable } from '@nestjs/common';

import { UserService } from '../user/user.service';
import { LoginInput, SignupInput } from './dto/inputs';
import { AuthResponse } from './dto/types/auth-response.type';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UserService) {}

  async signup(signupInput: SignupInput): Promise<AuthResponse> {
    const user = await this.usersService.create(signupInput);
    const token = 'ABC123';
    return { token, user };
  }

  async login(loginInput: LoginInput): Promise<AuthResponse> {
    const { email, password } = loginInput;
    const user = await this.usersService.findOneByEmail(email);
    const token = 'ABC123';

    return {
      token,
      user,
    };
  }
}
