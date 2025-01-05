import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Patch, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AccnoService } from './accno.service';
import { Accno } from 'src/entity/accno.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@ApiTags('Master File (Company Reference)')
@Controller('accno')
export class AccnoController {
    constructor(private readonly accnoService: AccnoService) { }
    @Get('GetAccno/:comcode')
    async IGetAccno(@Param('comcode') comcode: string) {
    try {
        const res = await this.accnoService.GetAccno(comcode);
        return res;
    } catch (error) {
      console.error('Error Not Found', error);
      throw new HttpException('Error Not Found ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    
  }
  @Patch('UpdateOrInsertAccno')
    async IUpdateOrInsertAccno(@Body() obj : Accno) {
        try {
            const foundAccno = await this.accnoService.getAccnoByOne(obj); 
            if(foundAccno != null){
              const res = await this.accnoService.UpdateAccno(obj , foundAccno); 
              return res;
            }else{
              const res = await this.accnoService.insertAccno(obj); 
              return res;
            }
        } catch (error) {
            console.error('Error Not Found', error);
            throw new HttpException('Error Not Found: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @Delete('DeleteAccno/:comcode/:accno')
    @HttpCode(HttpStatus.OK)
    async deleteAccno(
        @Param('comcode') comcode: string,
        @Param('accno') accno: string,
    ): Promise<boolean> {
        return await this.accnoService.deleteAccno(comcode, accno);
    }
}
