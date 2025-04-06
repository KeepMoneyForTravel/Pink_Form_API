import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsrTran } from 'src/entity/user/usrtran.entity';
import { UgtranService } from './ugtran.service';
import { UgtranController } from './ugtran.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UsrTran])], 
  providers: [UgtranService],
  controllers: [UgtranController],
  exports: [UgtranService],
})
export class UgtranModule {}
