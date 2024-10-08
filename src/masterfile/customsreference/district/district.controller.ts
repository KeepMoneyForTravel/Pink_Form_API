import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DistrictService } from './district.service';

@ApiTags('Master File (Custom Reference)')
@Controller('district')
export class DistrictController {
    constructor(private readonly districtService: DistrictService) { }
    @Get('District')
    async IGetDistrict() {
    try {
        const res = await this.districtService.GetDistrict();
        return res;
    } catch (error) {
      console.error('Error fetching Exporter', error);
      throw new HttpException('Error fetching Exporter ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
}
