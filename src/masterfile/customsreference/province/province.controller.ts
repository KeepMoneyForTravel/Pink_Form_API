import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProvinceService } from './province.service';

@ApiTags('Master File (Custom Reference)')
@Controller('province')
export class ProvinceController {
    constructor(private readonly provinceService: ProvinceService) { }
    @Get('Province')
    async IGetProvince() {
    try {
        const res = await this.provinceService.GetProvince();
        return res;
      
    } catch (error) {
      console.error('Error fetching Exporter', error);
      throw new HttpException('Error fetching Exporter ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
}
