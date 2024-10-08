import { Module } from '@nestjs/common';
import { PortController } from './port.controller';
import { PortService } from './port.service';
import { Port } from 'src/entity/customsreference/port.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [PortController],
  providers: [PortService],
  imports: [TypeOrmModule.forFeature([Port])],
  exports: [PortService],
})
export class PortModule {}
