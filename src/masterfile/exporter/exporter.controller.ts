import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Patch, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ExporterService } from './exporter.service';
import { Exporter } from 'src/entity/exporter.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@ApiTags('Master File (Company Reference)')
@Controller('exporters')
export class ExporterController {
    constructor(private readonly exporterService: ExporterService) { }
    @Get('GetExporter/:comcode')
    async IGetExporter(@Param('comcode') comcode: string) {
        try {
            const resexport = await this.exporterService.GetExporter(comcode);
            if (resexport.length == 0) {
                throw new HttpException('Not Found', HttpStatus.NO_CONTENT);
            }
            console.log(resexport);
            return resexport;
        } catch (error) {
            console.error('Error Not Found', error);
            throw new HttpException('Error Not Found: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Patch('UpdateOrInsertExporter')
    async IUpdateOrInsertExporter(@Body() obj: Exporter) {
        try {
            const foundExporter = await this.exporterService.getExporterByOne(obj);
            if (foundExporter != null) {
                const res = await this.exporterService.UpdateExporter(obj, foundExporter);
                return res;
            } else {
                const res = await this.exporterService.insertExporter(obj);
                return res;
            }
        } catch (error) {
            console.error('Error Not Found', error);
            throw new HttpException('Error Not Found: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Delete('DeleteExporter/:comcode/:code')
    @HttpCode(HttpStatus.OK)
    async deleteExporter(
        @Param('comcode') comcode: string,
        @Param('code') code: string,
    ): Promise<boolean> {
        return await this.exporterService.deleteExporter(comcode, code);
    }
}

