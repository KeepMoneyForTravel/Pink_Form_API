import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AnnounceService } from './announce.service';

@ApiTags('Master File (Company Reference)')
@Controller('announce')
export class AnnounceController {
    constructor(private readonly announceService: AnnounceService) { }
    @Get('Announce')
    async IGetAccno() {
    try {
        const res = await this.announceService.GetAnnounce();
        return res;
      
    } catch (error) {
      console.error('Error fetching Exporter', error);
      throw new HttpException('Error fetching Exporter ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    
  }
}

