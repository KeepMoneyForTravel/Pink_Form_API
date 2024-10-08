import { Controller, Post, Body, HttpException, HttpStatus, UnauthorizedException, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    // @Post('login')
    // async login(@Body() loginDto: LoginDto) {
    //     const user = await this.authService.validateUser(loginDto.username, loginDto.password);
    //     await this.usersService.updateTime(user.id)
    //     user
    //     if (user == null) {
    //         throw new HttpException('User Not Found', HttpStatus.BAD_GATEWAY);
    //     }
    //     return this.authService.login(user);
    // }

   
}
