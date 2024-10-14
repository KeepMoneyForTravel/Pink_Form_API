import { Controller, Get, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TariffService } from './tariff.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@ApiTags('Master File (Custom Reference)')
@Controller('tariff')
export class TariffController {
    constructor(private readonly tariffService: TariffService) { }
    @Get('GetTariff')
    async IGetTariff () {
    try {
        const res = await this.tariffService.GetTariff ();
        return res;
    } catch (error) {
      console.error('Error Not Found', error);
      throw new HttpException('Error Not Found ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
}
