import { Module } from '@nestjs/common';
import { UnitpackController } from './unitpack.controller';
import { UnitpackService } from './unitpack.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnitPack } from 'src/entity/customsreference/unitpack.entity';

@Module({
    controllers: [UnitpackController],
    providers: [UnitpackService],
    imports: [TypeOrmModule.forFeature([UnitPack])],
    exports: [UnitpackService],
})
export class UnitpackModule {}
