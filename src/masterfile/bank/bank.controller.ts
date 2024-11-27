
import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Patch, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BankService } from './bank.service';
import { Bank } from 'src/entity/bank.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@ApiTags('Master File (Company Reference)')
@Controller('bank')
export class BankController {
  constructor(private readonly bankService: BankService) { }
  @Get('GetBank')
  async IGetBank() {
    try {
      const res = await this.bankService.GetBank();
      return res;

    } catch (error) {
      console.error('Error Not Found', error);
      throw new HttpException('Error Not Found ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @Patch('UpdateOrInsertBank')
  async IUpdateOrInsertBank(@Body() obj: Bank) {
    try {
      console.log(obj);
      const foundBank = await this.bankService.getBankByOne(obj);
      if (foundBank != null) {
        const res = await this.bankService.UpdateBank(obj, foundBank);
        return res;
      } else {
        const res = await this.bankService.insertBank(obj);
        return res;
      }
    } catch (error) {
      console.error('Error Not Found', error);
      throw new HttpException('Error Not Found: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete('Deletebank/:bankcode')
    @HttpCode(HttpStatus.OK)
    async deletebank(
        @Param('bankcode') bankcode: string
    ): Promise<boolean> {
        return await this.bankService.deletebank(bankcode);
    }
}

