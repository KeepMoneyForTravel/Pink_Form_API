import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CurrencyService } from './currency.service';

@ApiTags('Master File (Custom Reference)')
@Controller('currency')
export class CurrencyController {
    constructor(private readonly currencyService: CurrencyService) { }
    @Get('Currency')
    async IGetCurrency () {
    try {
        const res = await this.currencyService.GetCurrency ();
        return res;
    } catch (error) {
      console.error('Error fetching Exporter', error);
      throw new HttpException('Error fetching Exporter ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
}
