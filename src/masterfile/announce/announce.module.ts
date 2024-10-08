import { Module } from '@nestjs/common';
import { AnnounceService } from './announce.service';
import { AnnounceController } from './announce.controller';
import { Announce } from 'src/entity/announce.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Announce])], 
  providers: [AnnounceService],
  controllers: [AnnounceController],
  exports: [AnnounceService],
})
export class AnnounceModule {}
