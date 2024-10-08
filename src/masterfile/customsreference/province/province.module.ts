import { Module } from '@nestjs/common';
import { ProvinceController } from './province.controller';

@Module({
  controllers: [ProvinceController]
})
export class ProvinceModule {}
