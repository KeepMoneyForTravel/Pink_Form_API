import { Module } from '@nestjs/common';
import { ProvinceController } from './province.controller';
import { ProvinceService } from './province.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Province } from 'src/entity/customsreference/province.entity';

@Module({
  controllers: [ProvinceController],
  providers: [ProvinceService],
  imports: [TypeOrmModule.forFeature([Province])],
  exports: [ProvinceService],
})
export class ProvinceModule {}
