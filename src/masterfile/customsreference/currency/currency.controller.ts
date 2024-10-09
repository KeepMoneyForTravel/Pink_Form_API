import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CurrencyService } from './currency.service';

@ApiTags('Master File (Custom Reference)')
@Controller('currency')
export class CurrencyController {
    constructor(private readonly currencyService: CurrencyService) { }
    @Get('GetCurrency')
    async IGetCurrency () {
    try {
        const res = await this.currencyService.GetCurrency ();
        return res;
    } catch (error) {
      console.error('Error Not Found', error);
      throw new HttpException('Error Not Found ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
}
