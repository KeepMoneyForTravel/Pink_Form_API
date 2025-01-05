import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Accno } from 'src/entity/accno.entity';
import { PinkfromService } from './pinkfrom.service';
import { Pinkform } from 'src/entity/inv/pinkfrom.entity';
import { PinkfromController } from './pinkfrom.controller';
import { HinvModule } from '../hinv/hinv.module';

@Module({
  imports: [TypeOrmModule.forFeature([Pinkform]) , HinvModule], 
    providers: [PinkfromService],
    controllers: [PinkfromController],
    exports: [PinkfromService],
})
export class PinkfromModule {}
