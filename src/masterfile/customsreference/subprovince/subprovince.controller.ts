import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SubprovinceService } from './subprovince.service';

@ApiTags('Master File (Custom Reference)')
@Controller('subprovince')
export class SubprovinceController {
    constructor(private readonly subprovinceService: SubprovinceService) { }
    @Get('Subprovince')
    async IGetProvince() {
    try {
        const res = await this.subprovinceService.GetSubprovince();
        return res;
    } catch (error) {
      console.error('Error fetching Exporter', error);
      throw new HttpException('Error fetching Exporter ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
}
