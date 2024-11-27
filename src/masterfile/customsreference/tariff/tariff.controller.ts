import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Patch, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TariffService } from './tariff.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth/jwt-auth.guard';
import { Tariff } from 'src/entity/customsreference/tariff.entity';

@UseGuards(JwtAuthGuard)
@ApiTags('Master File (Custom Reference)')
@Controller('tariff')
export class TariffController {
  constructor(private readonly tariffService: TariffService) { }
  @Get('GetTariff')
  async IGetTariff() {
    try {
      const res = await this.tariffService.GetTariff();
      return res;
    } catch (error) {
      console.error('Error Not Found', error);
      throw new HttpException('Error Not Found ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @Patch('UpdateOrInsertTariff')
  async IUpdateOrInsertTariff(@Body() obj: Tariff) {
    try {
      const foundTariff = await this.tariffService.getTariffByOne(obj);
      if (foundTariff != null) {
        const res = await this.tariffService.UpdateTariff(obj, foundTariff);
        return res;
      } else {
        const res = await this.tariffService.insertTariff(obj);
        return res;
      }
    } catch (error) {
      console.error('Error Not Found', error);
      throw new HttpException('Error Not Found: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @Delete('DeleteTariff/:tariffclas')
    @HttpCode(HttpStatus.OK)
    async deleteTariff(
        @Param('tariffclas') tariffclas: string,
    ): Promise<boolean> {
        return await this.tariffService.deleteTariff(tariffclas);
    }
}
