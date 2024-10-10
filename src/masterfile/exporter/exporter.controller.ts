import { Body, Controller, Get, HttpException, HttpStatus, Param, Patch } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ExporterService } from './exporter.service';
import { Exporter } from 'src/entity/exporter.entity';

@ApiTags('Master File (Company Reference)')
@Controller('exporter')
export class ExporterController {
    constructor(private readonly exporterService: ExporterService) { }
    @Get('GetExporter/:comcode')
    async IGetExporter(@Param('comcode') comcode: string) {
        try {
            const res = await this.exporterService.GetExporter(comcode);
            return res;
        } catch (error) {
            console.error('Error Not Found', error);
            throw new HttpException('Error Not Found: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // @Get('GetExporteGetSuggestionByCode/:code')
    // async IGetExporteGetSuggestionByCode(@Param('code') code: string) {
    //     try {
    //         const res = await this.exporterService.getSuggestionByCode(code);
    //         return res;
    //     } catch (error) {
    //         console.error('Error Not Found', error);
    //         throw new HttpException('Error Not Found: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    //     }
    // }

    @Patch('UpdateOrInsertExporter')
    async IUpdateOrInsertExporter(@Body() obj : Exporter) {
        try {
            const foundExporter = await this.exporterService.getExporterByOne(obj); 
            if(foundExporter != null){
              const res = await this.exporterService.UpdateExporter(obj , foundExporter); 
              return res;
            }else{
              const res = await this.exporterService.insertExporter(obj); 
              return res;
            }
        } catch (error) {
            console.error('Error Not Found', error);
            throw new HttpException('Error Not Found: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
  }

