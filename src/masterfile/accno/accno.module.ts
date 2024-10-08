import { Module } from '@nestjs/common';
import { AccnoService } from './accno.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Accno } from 'src/entity/accno.entity';
import { AccnoController } from './accno.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Accno])], 
    providers: [AccnoService],
    controllers: [AccnoController],
    exports: [AccnoService],
})
export class AccnoModule {}
