import { Module } from '@nestjs/common';
import { UnitqtyService } from './unitqty.service';
import { UnitqtyController } from './unitqty.controller';
import { Unitqty } from 'src/entity/customsreference/unitqty.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    controllers: [UnitqtyController],
    providers: [UnitqtyService],
    imports: [TypeOrmModule.forFeature([Unitqty])],
    exports: [UnitqtyService],
})
export class UnitqtyModule {}
