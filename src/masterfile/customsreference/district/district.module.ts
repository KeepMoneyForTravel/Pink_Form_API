import { Module } from '@nestjs/common';
import { DistrictController } from './district.controller';
import { DistrictService } from './district.service';
import { District } from 'src/entity/customsreference/district.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    controllers: [DistrictController],
    providers: [DistrictService],
    imports: [TypeOrmModule.forFeature([District])],
    exports: [DistrictService],
})
export class DistrictModule {}
