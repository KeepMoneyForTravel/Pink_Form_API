import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ConsigneeService } from './consignee.service';

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
          console.error('Error fetching Exporter', error);
          throw new HttpException('Error fetching Exporter ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
      }
}
