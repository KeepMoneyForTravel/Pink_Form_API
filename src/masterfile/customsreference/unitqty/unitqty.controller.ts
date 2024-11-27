import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Patch, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UnitqtyService } from './unitqty.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth/jwt-auth.guard';
import { Unitqty } from 'src/entity/customsreference/unitqty.entity';

@UseGuards(JwtAuthGuard)
@ApiTags('Master File (Custom Reference)')
@Controller('unitqty')
export class UnitqtyController {
    constructor(private readonly unitqtyService: UnitqtyService) { }
    @Get('GetUnitqty')
    async IGetUnitqty () {  
    try {
        const res = await this.unitqtyService.GetUnitqty (); 
        return res;
    } catch (error) {
      console.error('Error Not Found', error);
      throw new HttpException('Error Not Found ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
@Patch('UpdateOrInsertUnitqty')
    async IUpdateOrInsertUnitqty(@Body() obj : Unitqty) {
        try {
            const foundUnitqty = await this.unitqtyService.getUnitqtyByOne(obj); 
            if(foundUnitqty != null){
              const res = await this.unitqtyService.UpdateUnitqty(obj , foundUnitqty); 
              return res;
            }else{
              const res = await this.unitqtyService.insertUnitqty(obj); 
              return res;
            }
        } catch (error) {
            console.error('Error Not Found', error);
            throw new HttpException('Error Not Found: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @Delete('DeleteUnitqty/:code')
    @HttpCode(HttpStatus.OK)
    async deleteUnitqty(
        @Param('code') code: string,
    ): Promise<boolean> {
        return await this.unitqtyService.deleteUnitqty(code);
    }
}
