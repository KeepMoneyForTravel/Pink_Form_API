import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Patch, UseGuards } from '@nestjs/common';
import { UgpermissionsService } from './ugpermissions.service';
import { UgPermissions } from 'src/entity/user/ugpermissions.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth/jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';

@UseGuards(JwtAuthGuard)
@ApiTags('User Group Permissions')
@Controller('ugpermissions')
export class UgpermissionsController {
    constructor(private readonly ugpermissionsService: UgpermissionsService) { }
     @Get('GetUgpermissions')
      async IGetUgpermissions() {
        try {
          const res = await this.ugpermissionsService.GetUgPermissions();
          return res;
    
        } catch (error) {
          console.error('Error Not Found', error);
          throw new HttpException('Error Not Found ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
      }
      @Patch('UpdateOrInsertUgpermissions')
      async IUpdateOrInsertUgpermissions(@Body() obj: UgPermissions) {
        try {
          console.log(obj);
          const foundUgpermissions = await this.ugpermissionsService.getUgPermissionsByOne(obj);
          if (foundUgpermissions != null) {
            const res = await this.ugpermissionsService.UpdateUgPermissions(obj, foundUgpermissions);
            return res;
          } else {
            const res = await this.ugpermissionsService.insertUgPermissions(obj);
            return res;
          }
        } catch (error) {
          console.error('Error Not Found', error);
          throw new HttpException('Error Not Found: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
      }
    
      @Delete('Deleteugpermissions/:id')
        @HttpCode(HttpStatus.OK)
        async deleteugpermissions(
            @Param('id') id: number
        ): Promise<boolean> {
            return await this.ugpermissionsService.deleteugPermissions(id);
        }
}
