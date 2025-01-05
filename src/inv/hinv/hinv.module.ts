import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PinkHinv } from 'src/entity/inv/hinv.entity';
import { HinvService } from './hinv.service';
import { HinvController } from './hinv.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PinkHinv])], 
    providers: [HinvService],
    controllers: [HinvController],
    exports: [HinvService],
})
export class HinvModule {}
