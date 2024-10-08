import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AccnoService } from './accno.service';

@ApiTags('Master File (Company Reference)')
@Controller('accno')
export class AccnoController {
    constructor(private readonly accnoService: AccnoService) { }
    @Get('Accno')
    async IGetAccno() {
    try {
        const res = await this.accnoService.GetAccno();
        return res;
      
    } catch (error) {
      console.error('Error fetching Exporter', error);
      throw new HttpException('Error fetching Exporter ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    
  }
}
