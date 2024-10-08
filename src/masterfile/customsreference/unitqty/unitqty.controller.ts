import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UnitqtyService } from './unitqty.service';

@ApiTags('Master File (Custom Reference)')
@Controller('unitqty')
export class UnitqtyController {
    constructor(private readonly unitqtyService: UnitqtyService) { }
    @Get('Unitqty')
    async IGetUnitqty () {
    try {
        const res = await this.unitqtyService.GetUnitqty ();
        return res;
    } catch (error) {
      console.error('Error fetching Exporter', error);
      throw new HttpException('Error fetching Exporter ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
}
