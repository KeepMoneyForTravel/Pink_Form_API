import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthoService } from './autho.service';

@ApiTags('Master File (Company Reference)')
@Controller('autho')
export class AuthoController {
    constructor(private readonly authoService: AuthoService) { }
    @Get('Autho')
    async IGetAutho() {
        try {
            const res = await this.authoService.GetAllAutho();
            return res;
          
        } catch (error) {
          console.error('Error fetching Exporter', error);
          throw new HttpException('Error fetching Exporter ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
      }
}
