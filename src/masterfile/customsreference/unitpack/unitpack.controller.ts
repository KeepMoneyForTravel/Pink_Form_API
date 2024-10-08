import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { UnitpackService } from './unitpack.service';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('Master File (Custom Reference)')
@Controller('unitpack')
export class UnitpackController {
    constructor(private readonly unitpackService: UnitpackService) { }
    @Get('Unitpack')
    async IGetUnitpack () {
    try {
        const res = await this.unitpackService.GetUnitPack();
        return res;
    } catch (error) {
      console.error('Error fetching Exporter', error);
      throw new HttpException('Error fetching Exporter ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
}
