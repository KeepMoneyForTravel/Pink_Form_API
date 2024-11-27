import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Patch, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CurrencyService } from './currency.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth/jwt-auth.guard';
import { Currency } from 'src/entity/customsreference/currency.entity';

@UseGuards(JwtAuthGuard)
@ApiTags('Master File (Custom Reference)')
@Controller('currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) { }
  @Get('GetCurrency')
  async IGetCurrency() {
    try {
      const res = await this.currencyService.GetCurrency();
      return res;
    } catch (error) {
      console.error('Error Not Found', error);
      throw new HttpException('Error Not Found ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @Patch('UpdateOrInsertCurrency')
  async IUpdateOrInsertCurrency(@Body() obj: Currency) {
    try {
      const foundCurrency = await this.currencyService.getCurrencyByOne(obj);
      if (foundCurrency != null) {
        const res = await this.currencyService.UpdateCurrency(obj, foundCurrency);
        return res;
      } else {
        const res = await this.currencyService.insertCurrency(obj);
        return res;
      }
    } catch (error) {
      console.error('Error Not Found', error);
      throw new HttpException('Error Not Found: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @Delete('DeletCurrency/:code')
  @HttpCode(HttpStatus.OK)
  async deletCurrency(
    @Param('code') code: string,
  ): Promise<boolean> {
    return await this.currencyService.deletCurrency(code);
  }
}
