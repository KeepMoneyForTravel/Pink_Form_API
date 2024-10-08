import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  // constructor(
  //   private readonly jwtService: JwtService
  // ) { }

  // async validateUser(username: string, password: string): Promise<Auth | null> {
  //   const user = await this.usersService.findByUsername(username,password);
  //   if (!user == null) {
  //     console.error('User not found');
  //     throw new Error('User not found');
  //   }
  //   return user;
  // }

  // async login(user: Auth) {
  //   const payload = { username: user.user, password: user.password };
  //   return {
  //     access_token: this.jwtService.sign(payload),
  //   };
  // }
}