import { Module } from '@nestjs/common';
import { UgpermissionsController } from './ugpermissions.controller';
import { UgpermissionsService } from './ugpermissions.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UgPermissions } from 'src/entity/user/ugpermissions.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UgPermissions])], 
  providers: [UgpermissionsService],
  controllers: [UgpermissionsController],
  exports: [UgpermissionsService],
})
export class UgpermissionsModule {}
