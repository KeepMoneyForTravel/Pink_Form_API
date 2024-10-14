import { Controller, Post, Body, HttpException, HttpStatus, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, ResLogin } from 'src/entity/user/usernamepink.entity';
import { UserService } from 'src/user/user.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService,private readonly userService: UserService) { }

    @Post('login')
    async login(@Body() loginDto: LoginDto) {
        const user = await this.authService.validateUser(loginDto.username, loginDto.password);
        if (user == null) {
            throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
        }
        let grp = await this.userService.findgrp(user.username);
        if(grp.length === 0){
            grp = [];
        }
        const { access_token } = await this.authService.login(user);
        const response: ResLogin = {
            username: user.username,
            grpcode: user.grpcode,
            tokenres: access_token,
            authDetails: grp,
        };
        return response

    }
}
