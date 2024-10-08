import { Module } from '@nestjs/common';
import { StatcodeController } from './statcode.controller';
import { StatcodeService } from './statcode.service';
import { Statcode } from 'src/entity/customsreference/statcode.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [StatcodeController],
  providers: [StatcodeService],
  imports: [TypeOrmModule.forFeature([Statcode])],
  exports: [StatcodeService]
})
export class StatcodeModule {}
