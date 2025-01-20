import { Module } from '@nestjs/common';
import { EinvController } from './einv.controller';
import { EinvService } from './einv.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PinkEinv } from 'src/entity/inv/einv.entity';

@Module({
    imports: [TypeOrmModule.forFeature([PinkEinv])],
    providers: [EinvService],
    controllers: [EinvController],
    exports: [EinvService],
})
export class EinvModule { }
