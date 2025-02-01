import { Body, Controller, Delete, HttpCode, HttpException, HttpStatus, Param, Patch } from '@nestjs/common';
import { EinvService } from './einv.service';
import { PinkEinv } from 'src/entity/inv/einv.entity';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('INV')
@Controller('einv')
export class EinvController {
    constructor(private readonly einvService: EinvService) { }
    @Patch('UpdateOrInsertEinv')
        async IUpdateOrInsertEinv(@Body() obj : PinkEinv) {
            try {
                const foundEinv = await this.einvService.getEinvByOneItem(obj); 
                if(foundEinv != null){
                  const res = await this.einvService.UpdatePinkEinv(obj , foundEinv); 
                  return res;
                }else{
                  const res = await this.einvService.insertPinkEinv(obj); 
                  return res;
                }
            } catch (error) {
                console.error('Error Not Found', error);
                throw new HttpException('Error Not Found: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
        @Delete('DeleteEinv/:comcode/:refno/:invno/:itemno')
        @HttpCode(HttpStatus.OK)
        async deleteAccno(
            @Param('comcode') comcode: string,
            @Param('refno') refno: string,
            @Param('invno') invno: string,
            @Param('itemno') itemno: string,
        ): Promise<boolean> {
            return await this.einvService.deleteEinv(comcode, refno, invno, itemno);
        }
}
