import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DistrictService } from './district.service';

@ApiTags('Master File (Custom Reference)')
@Controller('district')
export class DistrictController {
    constructor(private readonly districtService: DistrictService) { }
    @Get('GetDistrict')
    async IGetDistrict() {
    try {
        const res = await this.districtService.GetDistrict();
        return res;
    } catch (error) {
      console.error('Error Not Found', error);
      throw new HttpException('Error Not Found ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
}
