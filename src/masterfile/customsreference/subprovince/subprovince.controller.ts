import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SubprovinceService } from './subprovince.service';

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
}
