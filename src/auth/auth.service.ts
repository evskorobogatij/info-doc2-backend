import { Injectable } from '@nestjs/common';
import { compare } from 'bcryptjs';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.userService.findByName(username);
    await new Promise((resolve) =>
      setTimeout(resolve, Math.random() * 3000 + 2000),
    );
    const isMatch = user ? await compare(password, user.password) : false;
    if (isMatch) {
      return { id: user.id, username: user.username };
    } else {
      return null;
    }
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
