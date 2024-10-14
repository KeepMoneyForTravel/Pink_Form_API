import { Body, Controller, Get, HttpException, HttpStatus, Patch, UseGuards } from '@nestjs/common';
import { PortService } from './port.service';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth/jwt-auth.guard';
import { Port } from 'src/entity/customsreference/port.entity';

@UseGuards(JwtAuthGuard)
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
@Patch('UpdateOrInsertPort')
async IUpdateOrInsertPort(@Body() obj: Port) {
  try {
    const foundPort = await this.portService.getPortByOne(obj);
    if (foundPort != null) {
      const res = await this.portService.UpdatePort(obj, foundPort);
      return res;
    } else {
      const res = await this.portService.insertPort(obj);
      return res;
    }
  } catch (error) {
    console.error('Error Not Found', error);
    throw new HttpException('Error Not Found: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
}
