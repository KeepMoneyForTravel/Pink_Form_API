import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Auth, UsernamePink } from 'src/entity/user/usernamepink.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) { }

  async validateUser(username: string, password: string): Promise<UsernamePink | null> {
    const user = await this.userService.findByUsername(username,password);
    if (!user == null) {
      console.error('User not found');
      throw new Error('User not found');
    }
    return user;
  }

  async login(user: UsernamePink) {
    const payload = { username: user.username, password: user.usrpasswrd3 };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}