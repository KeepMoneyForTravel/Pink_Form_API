import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Patch, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DistrictService } from './district.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth/jwt-auth.guard';
import { District } from 'src/entity/customsreference/district.entity';

@UseGuards(JwtAuthGuard)
@ApiTags('Master File (Custom Reference)')
@Controller('district')
export class DistrictController {
    constructor(private readonly districtService: DistrictService) { }
    @Get('GetDistrict')
    async IGetDistrict() {
    try {
        const res = await this.districtService.GetDistrict();
        return res;
    } catch (error) {
      console.error('Error Not Found', error);
      throw new HttpException('Error Not Found ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
@Get('GetDistrictJoin')
  async IGetDistrictJoin() {
    try {
      const res = await this.districtService.GetDistrictJoin();
      return res;
    } catch (error) {
      console.error('Error Not Found', error);
      throw new HttpException('Error Not Found ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
@Patch('UpdateOrInsertDistrict')
async IUpdateOrInsertDistrict(@Body() obj: District) {
  try {
    const foundDistrict = await this.districtService.getDistrictByOne(obj);
    if (foundDistrict != null) {
      const res = await this.districtService.UpdateDistrict(obj, foundDistrict);
      return res;
    } else {
      const res = await this.districtService.insertDistrict(obj);
      return res;
    }
  } catch (error) {
    console.error('Error Not Found', error);
    throw new HttpException('Error Not Found: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
@Delete('DeleteDistrict/:code')
    @HttpCode(HttpStatus.OK)
    async deleteDistrict(
        @Param('code') code: string,
    ): Promise<boolean> {
        return await this.districtService.deleteDistrict(code);
    }
}
