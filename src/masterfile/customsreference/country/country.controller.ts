import { Controller, Get, HttpException, HttpStatus, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CountryService } from './country.service';

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
  // @Get('GetCountryPerPage')
  // async IGetCountryPerPage(
  //   @Query('page') page: number = 1,
  //   @Query('limit') limit: number = 100 
  // ): Promise<Country[]> {
  //   return this.countryService.getCountryPerPage(page, limit);
  // }
}
