import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ExporterService } from './exporter.service';

@ApiTags('Master File (Company Reference)')
@Controller('exporter')
export class ExporterController {
    constructor(private readonly exporterService: ExporterService) { }
    @Get('Exporter')
    async IGetExporter() {
    try {
        const res = await this.exporterService.GetExporter();
        return res;
      
    } catch (error) {
      console.error('Error fetching Exporter', error);
      throw new HttpException('Error fetching Exporter ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    
  }
}
