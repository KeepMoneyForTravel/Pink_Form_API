import { Module } from '@nestjs/common';
import { UsrSend } from 'src/entity/user/usrsend.entity';
import { UgsendService } from './ugsend.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UgsendController } from './ugsend.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UsrSend])], 
  providers: [UgsendService],
  controllers: [UgsendController],
  exports: [UgsendService],
})
export class UgsendModule {}
