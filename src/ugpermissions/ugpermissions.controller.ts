import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { UgpermissionsService } from './ugpermissions.service';
import { MasterfilePermissions, MasterfilePermissionsSend, MasterfilePermissionsTran, reqhead, UsernameComcode, UsernamePink, Usrg } from 'src/entity/user/ugpermissions.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth/jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { UgtranService } from './ugtran/ugtran.service';
import { UgsendService } from './ugsend/ugsend.service';

//@UseGuards(JwtAuthGuard)
@ApiTags('User Group Permissions')
@Controller('ugpermissions')
export class UgpermissionsController {
  constructor(private readonly ugpermissionsService: UgpermissionsService, private readonly ugsendService: UgsendService, private readonly ugtranService: UgtranService) { }
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

  @Get('GetUgpermissionsSend/:userGroupCode')
  async IGetUgpermissionsSend(@Param('userGroupCode') userGroupCode: string) {
    try {
      const res = await this.ugsendService.getAllPermissionsSendByUserGroup(userGroupCode);
      return res;

    } catch (error) {
      console.error('Error Not Found', error);
      throw new HttpException('Error Not Found ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @Post('upsertSend')
  async upsertPermissionsSend(@Body() data: MasterfilePermissionsSend) {
    await this.ugsendService.upsertPermissionsSend(data);
    return { message: 'Permissions upserted successfully.' };
  }
  @Post('upsertTran')
  async upsertPermissionsTran(@Body() data: MasterfilePermissionsTran) {
    await this.ugtranService.upsertPermissionsTran(data);
    return { message: 'Permissions upserted successfully.' };
  }
  @Post('upsert')
  async upsertPermissions(@Body() data: MasterfilePermissions) {
    console.log(data);
    await this.ugpermissionsService.upsertPermissions(data);
    return { message: 'Permissions upserted successfully.' };
  }
  @Post('insertgrp')
  async insertgrp(@Body() data: reqhead) {
    await this.ugpermissionsService.insertgrp(data);
    return { message: 'Permissions upserted successfully.' };
  }
  @Delete('delete/:userGroupCode')
  async deletePermissions(@Param('userGroupCode') userGroupCode: string) {
    try {
      const res = await this.ugpermissionsService.deletePermissions(userGroupCode);
      return res;
    } catch (error) {
      console.error('Error Not Found', error);
      throw new HttpException('Error Not Found ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('GetAllGroupCode')
  async IGetAllGroupCode(){
    try {
      const res = await this.ugpermissionsService.getAllGroupCode();
      return res;

    } catch (error) {
      console.error('Error Not Found', error);
      throw new HttpException('Error Not Found ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('GetUgpermissionsCompany/:comcode')
  async IGetUgpermissionsCompany(@Param('comcode') comcode: string) {
    try {
      const res1 = await this.ugpermissionsService.getheadCompany(comcode);
      const res = await this.ugpermissionsService.getAllPermissionsCompany(comcode);
      return {
        headCompany: res1,
        permissions: res
      };

    } catch (error) {
      console.error('Error Not Found', error);
      throw new HttpException('Error Not Found ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('upsertUserPink')
  async upsertUserPink(@Body() data: UsernamePink) {
    await this.ugpermissionsService.upsertUserPink(data);
    return { message: 'Permissions upserted successfully.' };
  }

  @Post('upsertUgpermissionsCompany')
  async upsertUgpermissionsCompany(@Body() data: UsernameComcode[]) {
    await this.ugpermissionsService.upsertUgpermissionsCompany(data);
    return { message: 'Permissions upserted successfully.' };
  }

  @Get('Getusernamepink')
  async IGetusernamepink() {
    try {
      const res1 = await this.ugpermissionsService.getusernamepink();
      return res1

    } catch (error) {
      console.error('Error Not Found', error);
      throw new HttpException('Error Not Found ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
