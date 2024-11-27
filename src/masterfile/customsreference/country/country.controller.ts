import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Patch, Query, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CountryService } from './country.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth/jwt-auth.guard';
import { Country } from 'src/entity/customsreference/country.entity';

@UseGuards(JwtAuthGuard)
@ApiTags('Master File (Custom Reference)')
@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) { }
  @Get('GetCountry')
  async IGetCountry() {
    try {
      const res = await this.countryService.GetCountry();
      return res;

    } catch (error) {
      console.error('Error Not Found', error);
      throw new HttpException('Error Not Found ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @Patch('UpdateOrInsertCountry')
  async IUpdateOrInsertCountry(@Body() obj: Country) {
    try {
      const foundCountry = await this.countryService.getCountryByOne(obj);
      if (foundCountry != null) {
        const res = await this.countryService.UpdateCountry(obj, foundCountry);
        return res;
      } else {
        const res = await this.countryService.insertCountry(obj);
        return res;
      }
    } catch (error) {
      console.error('Error Not Found', error);
      throw new HttpException('Error Not Found: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @Delete('DeleteCountry/:code')
    @HttpCode(HttpStatus.OK)
    async deleteCountry(
        @Param('code') code: string,
    ): Promise<boolean> {
        return await this.countryService.deleteCountry(code);
    }
}
