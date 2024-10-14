import { Body, Controller, Get, HttpException, HttpStatus, Patch, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProvinceService } from './province.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth/jwt-auth.guard';
import { Province } from 'src/entity/customsreference/province.entity';

@UseGuards(JwtAuthGuard)
@ApiTags('Master File (Custom Reference)')
@Controller('province')
export class ProvinceController {
  constructor(private readonly provinceService: ProvinceService) { }
  @Get('GetProvince')
  async IGetProvince() {
    try {
      const res = await this.provinceService.GetProvince();
      return res;

    } catch (error) {
      console.error('Error Not Found', error);
      throw new HttpException('Error Not Found ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @Patch('UpdateOrInsertProvince')
  async IUpdateOrInsertProvince(@Body() obj: Province) {
    try {
      const foundProvince = await this.provinceService.getProvinceByOne(obj);
      if (foundProvince != null) {
        const res = await this.provinceService.UpdateProvince(obj, foundProvince);
        return res;
      } else {
        const res = await this.provinceService.insertProvince(obj);
        return res;
      }
    } catch (error) {
      console.error('Error Not Found', error);
      throw new HttpException('Error Not Found: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
