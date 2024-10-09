import { Body, Controller, Get, HttpException, HttpStatus, Param, Patch } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ConsigneeService } from './consignee.service';
import { Consignee } from 'src/entity/consignee.entity';

@ApiTags('Master File (Company Reference)')
@Controller('consignee')
export class ConsigneeController {
  constructor(private readonly consigneeService: ConsigneeService) { }
  @Get('Consignee')
  async IGetConsignee() {
    try {
      const res = await this.consigneeService.GetConsignee();
      return res;
    } catch (error) {
      console.error('Error Not Found', error);
      throw new HttpException('Error Not Found ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  // @Get('GetConsigneeGetSuggestionByCode/:code')
  // async IGetExporteGetSuggestionByCode(@Param('code') code: string) {
  //   try {
  //     const res = await this.consigneeService.getSuggestionByCode(code);
  //     return res;
  //   } catch (error) {
  //     console.error('Error Not Found', error);
  //     throw new HttpException('Error Not Found: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
  //   }
  // }
  @Patch('UpdateOrInsertConsignee')
  async IUpdateOrInsertExporter(@Body() obj: Consignee) {
    try {
      const foundConsignee = await this.consigneeService.getConsigneeByOne(obj);
      if (foundConsignee != null) {
        const res = await this.consigneeService.UpdateConsignee(obj, foundConsignee);
        return res;
      } else {
        const res = await this.consigneeService.insertConsignee(obj);
        return res;
      }
    } catch (error) {
      console.error('Error Not Found', error);
      throw new HttpException('Error Not Found: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
