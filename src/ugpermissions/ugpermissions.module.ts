import { Module } from '@nestjs/common';
import { UgpermissionsController } from './ugpermissions.controller';
import { UgpermissionsService } from './ugpermissions.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usrg } from 'src/entity/user/ugpermissions.entity';
import { UsrTran } from 'src/entity/user/usrtran.entity';
import { UgtranService } from './ugtran/ugtran.service';
import { UgtranController } from './ugtran/ugtran.controller';
import { UgtranModule } from './ugtran/ugtran.module';
import { UgsendController } from './ugsend/ugsend.controller';
import { UgsendService } from './ugsend/ugsend.service';
import { UgsendModule } from './ugsend/ugsend.module';

@Module({
  imports: [TypeOrmModule.forFeature([Usrg]), UgtranModule, UgsendModule], 
  providers: [UgpermissionsService],
  controllers: [UgpermissionsController],
  exports: [UgpermissionsService],
})
export class UgpermissionsModule {}           