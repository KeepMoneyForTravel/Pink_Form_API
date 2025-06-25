import { Body, Controller, Delete, HttpCode, HttpException, HttpStatus, Param, Patch } from '@nestjs/common';
import { EinvService } from './einv.service';
import { PinkEinv } from 'src/entity/inv/einv.entity';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('INV')
@Controller('einv')
export class EinvController {
    constructor(private readonly einvService: EinvService) { }
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
    @Patch('UpdateOrInsertEinv')
    async IUpdateOrInsertEinv(@Body() obj: PinkEinv) {
        try {
            const foundEinv = await this.einvService.getEinvByOneItem(obj);
            if (foundEinv != null) {
                const res = await this.einvService.UpdatePinkEinv(obj, foundEinv);
                return res;
            } else {
                const res = await this.einvService.insertPinkEinv(obj);
                return res;
            }
        } catch (error) {
            console.error('Error Not Found', error);
            throw new HttpException('Error Not Found: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Patch('ChangeEinv/:comcode/:refno/:invno/:itemnoold/:itemnonew')
    async IChangeHinv(
        @Param('comcode') comcode: string,
        @Param('refno') refno: string,
        @Param('invno') invno: string,
        @Param('itemnoold') itemnoold: string,
        @Param('itemnonew') itemnonew: string
    ) {
        try {
            const res = await this.einvService.GetEinvByOne(comcode, refno, invno, itemnonew);
            if (res == null) {
                const res = await this.einvService.UpdatePinkEinvByOne(comcode, refno, invno, itemnoold, itemnonew);
            } else {
                throw new HttpException('รายการซ้ำ', HttpStatus.NOT_FOUND);
            }
            return res;

        } catch (error) {
            console.error('Error Not Found', error);
            throw new HttpException('Error Not Found ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
