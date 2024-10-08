import { Module } from '@nestjs/common';
import { SubprovinceController } from './subprovince.controller';
import { SubprovinceService } from './subprovince.service';
import { Subprovince } from 'src/entity/customsreference/subprovince.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [SubprovinceController],
  providers: [SubprovinceService],
  imports: [TypeOrmModule.forFeature([Subprovince])],
  exports: [SubprovinceService],
})
export class SubprovinceModule {}
