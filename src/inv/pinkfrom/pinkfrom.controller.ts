import { Body, Controller, Get, HttpException, HttpStatus, Param, Patch } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PinkfromService } from './pinkfrom.service';
import { Pinkform, PinkfromReq } from 'src/entity/inv/pinkfrom.entity';
import { HinvService } from '../hinv/hinv.service';
import { PinkfromHeadReq } from 'src/entity/inv/hinv.entity';

@ApiTags('INV')
@Controller('pinkfrom')
export class PinkfromController {
    constructor(private readonly pinkfromService: PinkfromService , private readonly hinvService: HinvService) { }

    @Get('GetpinkfromStatus')
    async IGetpinkfromStatus() {
        try {
            const res = await this.pinkfromService.GetpinkfromStatus();
            return res;

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
    async INewpinkfrom(@Param('comcode') comcode: string , @Param('usr') usr: string) {
        try {
            const res = await this.pinkfromService.GetpinkfromDesc(comcode);
            const prefix = res.slice(0, 4);
            const numericPart = res.slice(4);
            const incrementedNumber = (parseInt(numericPart) + 1).toString().padStart(numericPart.length, '0');
            const resa = prefix + incrementedNumber;
            const pinkform = new Pinkform();
            pinkform.comcode = comcode
            pinkform.refno = resa;
            const givenDate = new Date();
            const givenDatespit = givenDate.toISOString().split('T')[0];
            pinkform.refdd = givenDatespit.split("-").join("");
            pinkform.status = ''
            pinkform.update_tt = givenDate.toTimeString().split(' ')[0]; 
            pinkform.usrname = usr
            pinkform.update_dd = givenDatespit.split("-").join("");;
            const resinsert = await this.pinkfromService.insertPinkfrom(pinkform);
            return resinsert;
        } catch (error) {
            console.error('Error Not Found', error);
            throw new HttpException('Error Not Found ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Patch('UpdateOrInsertPinkfrom')
        async IUpdateOrInsertPinkfrom(@Body() obj : PinkfromHeadReq) {
            try {
                const foundPinkfrom = await this.pinkfromService.getPinkfromByOne(obj.pinkfrom); 
                const respinkfrom = await this.pinkfromService.UpdatePinkfrom(obj.pinkfrom , foundPinkfrom); 
                const foundPinkHinv = await this.hinvService.getPinkfromByOne(obj.pinkHinv); 
                const reshinv = await this.hinvService.UpdatePinkfrom(obj.pinkHinv , foundPinkHinv); 
                return respinkfrom
            } catch (error) {
                console.error('Error Not Found', error);
                throw new HttpException('Error Not Found: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
}
