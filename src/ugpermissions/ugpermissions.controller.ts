import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { UgpermissionsService } from './ugpermissions.service';
import { MasterfilePermissions, MasterfilePermissionsTran, Usrg } from 'src/entity/user/ugpermissions.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth/jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { UgtranService } from './ugtran/ugtran.service';

//@UseGuards(JwtAuthGuard)
@ApiTags('User Group Permissions')
@Controller('ugpermissions')
export class UgpermissionsController {
  constructor(private readonly ugpermissionsService: UgpermissionsService , private readonly ugtranService: UgtranService) { }
  @Get('GetUgpermissions/:userGroupCode')
  async IGetUgpermissions(@Param('userGroupCode') userGroupCode: string) {
    try {
      const res = await this.ugpermissionsService.getAllPermissionsByUserGroup(userGroupCode);
      return res;

    } catch (error) {
      console.error('Error Not Found', error);
      throw new HttpException('Error Not Found ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @Get('GetUgpermissionsTran/:userGroupCode')
  async IGetUgpermissionsTran(@Param('userGroupCode') userGroupCode: string) {
    try {
      const res = await this.ugtranService.getAllPermissionsTranByUserGroup(userGroupCode);
      return res;

    } catch (error) {
      console.error('Error Not Found', error);
      throw new HttpException('Error Not Found ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @Post('upsertTran')
  async upsertPermissionsTran(@Body() data: MasterfilePermissionsTran) {
    await this.ugtranService.upsertPermissionsTran(data);
    return { message: 'Permissions upserted successfully.' };
  }
  @Post('upsert')
  async upsertPermissions(@Body() data: MasterfilePermissions) {
    await this.ugpermissionsService.upsertPermissions(data);
    return { message: 'Permissions upserted successfully.' };
  }
}
