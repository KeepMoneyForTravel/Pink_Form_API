import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [], // Import the UsersModule
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule { }

