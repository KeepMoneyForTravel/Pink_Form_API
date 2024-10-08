import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExporterService } from './exporter.service';
import { ExporterController } from './exporter.controller';
import { Exporter } from 'src/entity/exporter.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Exporter])], 
  providers: [ExporterService],
  controllers: [ExporterController],
  exports: [ExporterService],
})
export class ExporterModule {}