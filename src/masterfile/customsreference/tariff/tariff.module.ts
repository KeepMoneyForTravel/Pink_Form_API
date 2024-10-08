import { Module } from '@nestjs/common';
import { TariffController } from './tariff.controller';
import { TariffService } from './tariff.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tariff } from 'src/entity/customsreference/tariff.entity';

@Module({
    controllers: [TariffController],
    providers: [TariffService],
    imports: [TypeOrmModule.forFeature([Tariff])],
    exports: [TariffService],
})
export class TariffModule {}
