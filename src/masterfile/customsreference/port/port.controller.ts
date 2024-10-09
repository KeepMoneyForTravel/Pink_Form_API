import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { PortService } from './port.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Master File (Custom Reference)')
@Controller('port')
export class PortController {
    constructor(private readonly portService: PortService) { }
    @Get('GetPort')
    async IGetPort () {
    try {
        const res = await this.portService.GetPort ();
        return res;
    } catch (error) {
      console.error('Error Not Found', error);
      throw new HttpException('Error Not Found ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
}
