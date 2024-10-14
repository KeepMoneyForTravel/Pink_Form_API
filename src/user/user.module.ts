import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { JwtModule } from '@nestjs/jwt';
import { UsernamePink } from 'src/entity/user/usernamepink.entity';
import { UserController } from './user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UsernamePink]), 
  JwtModule.register({
    global: true,
    secret: 'your-secret-key',
    signOptions: { expiresIn: '240m' },
  })],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule { }