import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth/jwt-auth.guard';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@UseGuards(JwtAuthGuard)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

//   @Get('GetALL')
//   @UseGuards(JwtAuthGuard)
//   async findAll() {
//     console.log('1');
//     try {
//       const users = await this.userService.findAll();
//       if (users.length > 0) {
//         return users;
//       } else {
//         throw new HttpException('No users found', HttpStatus.NOT_FOUND);
//       }
//     } catch (error) {
//       console.error('Error fetching users:', error);
//       throw new HttpException('Error fetching users: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
//     }
//   }


}
