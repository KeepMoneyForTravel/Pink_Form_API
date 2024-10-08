import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TariffService } from './tariff.service';

@ApiTags('Master File (Custom Reference)')
@Controller('tariff')
export class TariffController {
    constructor(private readonly tariffService: TariffService) { }
    @Get('Tariff')
    async IGetTariff () {
    try {
        const res = await this.tariffService.GetTariff ();
        return res;
    } catch (error) {
      console.error('Error fetching Exporter', error);
      throw new HttpException('Error fetching Exporter ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
}
