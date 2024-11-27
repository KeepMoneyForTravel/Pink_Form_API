import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Patch, UseGuards } from '@nestjs/common';
import { StatcodeService } from './statcode.service';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth/jwt-auth.guard';
import { Statcode } from 'src/entity/customsreference/statcode.entity';

@UseGuards(JwtAuthGuard)
@ApiTags('Master File (Custom Reference)')
@Controller('statcode')
export class StatcodeController {
  constructor(private readonly statcodeService: StatcodeService) { }
  @Get('GetStatcode')
  async IGetStatcode() {
    try {
      const res = await this.statcodeService.GetStatcode();
      return res;
    } catch (error) {
      console.error('Error Not Found', error);
      throw new HttpException('Error Not Found ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @Patch('UpdateOrInsertStatcode')
  async IUpdateOrInsertStatcode(@Body() obj: Statcode) {
    try {
      const foundStatcode = await this.statcodeService.getStatcodeByOne(obj);
      if (foundStatcode != null) {
        const res = await this.statcodeService.UpdateStatcode(obj, foundStatcode);
        return res;
      } else {
        const res = await this.statcodeService.insertStatcode(obj);
        return res;
      }
    } catch (error) {
      console.error('Error Not Found', error);
      throw new HttpException('Error Not Found: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @Delete('DeleteStatcode/:tariffclas/:tariffstat')
  @HttpCode(HttpStatus.OK)
  async deleteStatcode(
    @Param('tariffclas') tariffclas: string,
    @Param('tariffstat') tariffstat: string,
  ): Promise<boolean> {
    return await this.statcodeService.deleteStatcode(tariffclas , tariffstat);
  }
}
