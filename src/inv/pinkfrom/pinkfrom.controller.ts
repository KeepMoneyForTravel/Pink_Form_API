import { Body, Controller, Get, HttpException, HttpStatus, Param, Patch } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PinkfromService } from './pinkfrom.service';
import { InvRes, Pinkform, PinkfromReq } from 'src/entity/inv/pinkfrom.entity';
import { HinvService } from '../hinv/hinv.service';
import { PinkfromHeadReq, PinkHinv } from 'src/entity/inv/hinv.entity';
import { EinvService } from '../einv/einv.service';

@ApiTags('INV')
@Controller('pinkfrom')
export class PinkfromController {
    constructor(private readonly pinkfromService: PinkfromService, private readonly hinvService: HinvService, private readonly einvService: EinvService) { }

    @Get('GetPinkbyone/:comcode/:refno')
    async IGetPinkbyone(@Param('comcode') comcode: string, @Param('refno') refno: string) {
        try {
            const res = await this.pinkfromService.GetPinkbyone(comcode, refno);
            const res2 = await this.hinvService.GetPinkHinvbyone(comcode, refno);
            const res3 = await this.einvService.GetPinkEinvbyone(comcode, refno);
            const invRes: InvRes = {
                pinkform: res,
                pinkHinv: res2,
                pinkEinv: res3,
            };
            return invRes;

        } catch (error) {
            console.error('Error Not Found', error);
            throw new HttpException('Error Not Found ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Patch('Getpinkfrom')
    async IGetpinkfrom(@Body() obj: PinkfromReq) {
        try {
            const res = await this.pinkfromService.GetPinkform(obj);
            return res;

        } catch (error) {
            console.error('Error Not Found', error);
            throw new HttpException('Error Not Found ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Patch('Newpinkfrom/:comcode/:usr')
    async INewpinkfrom(@Param('comcode') comcode: string, @Param('usr') usr: string) {
        try {
            const res = await this.pinkfromService.GetpinkfromDesc(comcode);
            const prefix = res.slice(0, 4);
            const numericPart = res.slice(4);
            const incrementedNumber = (parseInt(numericPart) + 1).toString().padStart(numericPart.length, '0');
            const resa = prefix + incrementedNumber;
            const pinkform = new Pinkform();
            const pinkhinv = new PinkHinv();
            pinkform.comcode = comcode
            pinkhinv.refno = resa
            pinkhinv.invno = resa
            pinkform.refno = resa;
            const givenDate = new Date();
            const givenDatespit = givenDate.toISOString().split('T')[0];
            pinkform.refdd = givenDatespit.split("-").join("");
            pinkform.status = ''
            pinkform.update_tt = givenDate.toTimeString().split(' ')[0];
            pinkform.usrname = usr
            pinkform.update_dd = givenDatespit.split("-").join("");
            pinkhinv.usrname = usr
            pinkhinv.update_dd = givenDatespit.split("-").join("");
            pinkhinv.comcode = comcode
            const resinsert = await this.pinkfromService.insertPinkfrom(pinkform);
            const resinserthinv = await this.hinvService.insertPinkHinv(pinkhinv);
            // Ensure resinserthinv is added to an array
            const response: InvRes = {
                pinkform: resinsert,
                pinkHinv: Array.isArray(resinserthinv) ? resinserthinv : [resinserthinv], // Push into a list
                pinkEinv: []
            };

            return response;

        } catch (error) {
            console.error('Error Not Found', error);
            throw new HttpException('Error Not Found ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Patch('UpdateOrInsertPinkfrom')
    async IUpdateOrInsertPinkfrom(@Body() obj: PinkfromHeadReq) {
        try {
            const foundPinkfrom = await this.pinkfromService.getPinkfromByOne(obj.pinkform);
            const respinkfrom = await this.pinkfromService.UpdatePinkfrom(obj.pinkform, foundPinkfrom);
            const foundPinkHinv = await this.hinvService.getPinkHinvfromByOne(obj.pinkHinv);
            const reshinv = await this.hinvService.UpdatePinkHinv(obj.pinkHinv, foundPinkHinv);
            return {
                foundPinkHinv,
                reshinv,
            };
        } catch (error) {
            console.error('Error Not Found', error);
            throw new HttpException('Error Not Found: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
