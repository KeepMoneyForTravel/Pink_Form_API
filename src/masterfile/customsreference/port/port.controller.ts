import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { PortService } from './port.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Master File (Custom Reference)')
@Controller('port')
export class PortController {
    constructor(private readonly portService: PortService) { }
    @Get('Port')
    async IGetPort () {
    try {
        const res = await this.portService.GetPort ();
        return res;
    } catch (error) {
      console.error('Error fetching Exporter', error);
      throw new HttpException('Error fetching Exporter ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
}
