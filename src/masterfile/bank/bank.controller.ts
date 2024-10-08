
import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BankService } from './bank.service';

@ApiTags('Master File (Company Reference)')
@Controller('bank')
export class BankController {
    constructor(private readonly bankService: BankService) { }
    @Get('Bank')
    async IGetBank() {
    try {
        const res = await this.bankService.GetBank();
        return res;
      
    } catch (error) {
      console.error('Error fetching Exporter', error);
      throw new HttpException('Error fetching Exporter ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    
  }
}

