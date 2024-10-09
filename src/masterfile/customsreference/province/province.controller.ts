import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProvinceService } from './province.service';

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
}
