import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Patch, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SubprovinceService } from './subprovince.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth/jwt-auth.guard';
import { Subprovince } from 'src/entity/customsreference/subprovince.entity';

@UseGuards(JwtAuthGuard)
@ApiTags('Master File (Custom Reference)')
@Controller('subprovince')
export class SubprovinceController {
  constructor(private readonly subprovinceService: SubprovinceService) { }
  @Get('GetSubprovince')
  async IGetProvince() {
    try {
      const res = await this.subprovinceService.GetSubprovince();
      return res;
    } catch (error) {
      console.error('Error Not Found', error);
      throw new HttpException('Error Not Found ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @Get('GetSubprovinceJoin')
  async IGetSubprovinceJoin() {
    try {
      const res = await this.subprovinceService.GetSubprovinceJoin();
      return res;
    } catch (error) {
      console.error('Error Not Found', error);
      throw new HttpException('Error Not Found ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @Patch('UpdateOrInsertSubprovince')
  async IUpdateOrInsertSubprovince(@Body() obj: Subprovince) {
    try {
      const foundSubprovince = await this.subprovinceService.getSubprovinceByOne(obj);
      if (foundSubprovince != null) {
        const res = await this.subprovinceService.UpdateSubprovince(obj, foundSubprovince);
        return res;
      } else {
        const res = await this.subprovinceService.insertSubprovince(obj);
        return res;
      }
    } catch (error) {
      console.error('Error Not Found', error);
      throw new HttpException('Error Not Found: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @Delete('DeleteSubprovince/:code')
    @HttpCode(HttpStatus.OK)
    async deleteSubprovince(
        @Param('code') code: string,
    ): Promise<boolean> {
        return await this.subprovinceService.deleteSubprovince(code);
    }
}
