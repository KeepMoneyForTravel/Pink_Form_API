import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Patch } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PinkfromService } from './pinkfrom.service';
import { InvRes, Pinkform, PinkfromReq } from 'src/entity/inv/pinkfrom.entity';
import { HinvService } from '../hinv/hinv.service';
import { PinkfromHeadReq, PinkHinv } from 'src/entity/inv/hinv.entity';
import { EinvService } from '../einv/einv.service';
import { UserService } from 'src/user/user.service';
import e from 'express';

@ApiTags('INV')
@Controller('pinkfrom')
export class PinkfromController {
    constructor(private readonly pinkfromService: PinkfromService, private readonly hinvService: HinvService, private readonly einvService: EinvService, private readonly userService: UserService) { }

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
            pinkhinv.invno = ''
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
            return resinsert;

        } catch (error) {
            console.error('Error Not Found', error);
            throw new HttpException('Error Not Found ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Patch('Copypinkfrom/:refno/:comcode/:usr')
    async ICopypinkfrom(@Param('refno') refno: string, @Param('comcode') comcode: string, @Param('usr') usr: string) {
        let pinkform: any = null;

        try {
            const lastRef = await this.pinkfromService.GetpinkfromDesc(comcode);
            let resa: string;
            if (!lastRef) {
                resa = await this.pinkfromService.Getrefid(comcode); // initial value
            } else {
                const prefix = lastRef.slice(0, 4);
                const numericPart = lastRef.slice(4);
                const incrementedNumber = (parseInt(numericPart) + 1).toString().padStart(numericPart.length, '0');
                resa = prefix + incrementedNumber;
            }
            return resa;
            // const foundPinkfrom = await this.pinkfromService.getPinkfromByOneNoComp(refno);
            // const foundPinkHinv = await this.hinvService.getPinkHinvfromByOneNoComp(refno);
            // const foundPinkEinv = await this.einvService.GetPinkEinvbyoneNoComp(refno);
            // const now = new Date();
            // const dateStr = now.toISOString().split('T')[0].replace(/-/g, '');
            // const timeStr = now.toTimeString().split(' ')[0];
            // foundPinkfrom.comcode = comcode;
            // foundPinkfrom.refno = resa;
            // foundPinkfrom.refdd = dateStr;
            // foundPinkfrom.status = '';
            // foundPinkfrom.update_tt = timeStr;
            // foundPinkfrom.usr_create = usr;
            // foundPinkfrom.usr_create_dd = dateStr;
            // foundPinkfrom.usr_create_tt = timeStr;
            // foundPinkfrom.usrname = usr;
            // foundPinkfrom.update_dd = dateStr;
            // const updatedEinv = foundPinkEinv.map(item => ({
            //     ...item,
            //     refno: resa,
            //     usrname: usr,
            //     update_dd: dateStr,
            //     update_tt: timeStr
            // }));
            // const resinsert = await this.pinkfromService.insertPinkfrom(foundPinkfrom);
            // let resinserthinv: any[] = [];
            // if (foundPinkHinv) {
            //     const pinkhinv = {
            //         ...foundPinkHinv,
            //         refno: resa,
            //         update_tt: timeStr,
            //         usrname: usr,
            //         update_dd: dateStr,
            //         comcode
            //     };
            //     const result = await this.hinvService.insertPinkHinv(pinkhinv);
            //     resinserthinv = Array.isArray(result) ? result : [result];
            // }
            // const newInsertedList = [];
            // for (const item of updatedEinv) {
            //     const result = await this.einvService.insertPinkEinv(item);
            //     newInsertedList.push(result);
            // }
            // return {
            //     pinkform: resinsert,
            //     pinkHinv: resinserthinv,
            //     pinkEinv: newInsertedList
            // };

        } catch (error) {
            console.error('Error Not Found', error);
            throw new HttpException('Error Not Found: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @Patch('UpdateOrInsertPinkfrom')
    async IUpdateOrInsertPinkfrom(@Body() obj: PinkfromHeadReq) {
        try {
            const foundPinkfrom = await this.pinkfromService.getPinkfromByOne(obj.pinkform.comcode, obj.pinkform.refno);
            const respinkfrom = await this.pinkfromService.UpdatePinkfrom(obj.pinkform, foundPinkfrom);
            if (obj.pinkHinv == null) {
                return {
                    respinkfrom
                };
            }
            const foundPinkHinv = await this.hinvService.getPinkHinvfromByOne(obj.pinkHinv.comcode, obj.pinkHinv.refno);
            if (foundPinkHinv == null) {
                const reshinv = await this.hinvService.insertPinkHinv(obj.pinkHinv);
                return {
                    respinkfrom,
                    reshinv,
                };
            }
            const reshinv = await this.hinvService.UpdatePinkHinv(obj.pinkHinv, foundPinkHinv);
            return {
                respinkfrom,
                reshinv,
            };
        } catch (error) {
            console.error('Error Not Found', error);
            throw new HttpException('Error Not Found: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @Patch('ChangeHinv/:comcode/:refno/:invnoold/:invnonew')
    async IChangeHinv(
        @Param('comcode') comcode: string,
        @Param('refno') refno: string,
        @Param('invnoold') invnoold: string,
        @Param('invnonew') invnonew: string
    ) {
        try {
            const res = await this.hinvService.ChangeHinv(comcode, refno, invnoold, invnonew);
            return res;

        } catch (error) {
            console.error('Error Not Found', error);
            throw new HttpException('Error Not Found ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @Delete('DeletePinkFrom/:comcode/:refno')
    @HttpCode(HttpStatus.OK)
    async deletePinkFrom(
        @Param('comcode') comcode: string,
        @Param('refno') refno: string
    ): Promise<boolean> {
        return await this.pinkfromService.deletePinkFrom(comcode, refno);
    }
    @Delete('DeleteHinv/:comcode/:refno/:invno')
    @HttpCode(HttpStatus.OK)
    async deleteHinv(
        @Param('comcode') comcode: string,
        @Param('refno') refno: string,
        @Param('invno') invno: string,
    ): Promise<boolean> {
        return await this.hinvService.deleteHinv(comcode, refno, invno);
    }

    @Patch('CopyChangeInv/:comcode/:refno/:invnoold/:invnonew/:usr')
    async ICopyChangeInv(
        @Param('comcode') comcode: string,
        @Param('refno') refno: string,
        @Param('invnoold') invnoold: string,
        @Param('invnonew') invnonew: string,
        @Param('usr') usr: string
    ) {
        try {
            const res = await this.pinkfromService.GetPinkfromByComcode(comcode);
            const res1 = await this.pinkfromService.GetpinkfromDesc(comcode);
            let generatedValue: string;
            if (res1 == null) {
                const fallbackRes = await this.pinkfromService.GetPinkfromByNull(comcode);
                generatedValue = res + fallbackRes;
            } else {
                const prefix = res1.slice(0, 4);
                const numericPart = res1.slice(4);
                const incrementedNumber = (parseInt(numericPart) + 1).toString().padStart(numericPart.length, '0');
                generatedValue = prefix + incrementedNumber;
            }
            const hinv = generatedValue;
            const foundPinkfrom = await this.pinkfromService.getPinkfromByOne(comcode, refno);
            const foundPinkHinv = await this.hinvService.getPinkHinvfromByOne(comcode, refno);
            const foundPinkEinv = await this.einvService.GetPinkEinvbyone(comcode, refno)
            const pinkform = foundPinkfrom
            const pinkhinv = foundPinkHinv
            pinkform.comcode = comcode
            pinkform.refno = generatedValue;
            const givenDate = new Date();
            const givenDatespit = givenDate.toISOString().split('T')[0];
            const newfoundPinkEinv = foundPinkEinv.map(item => ({
                ...item,
                refno: generatedValue,
                usrname: usr,
                update_dd: givenDatespit.split("-").join(""),
                update_tt: givenDate.toTimeString().split(' ')[0]
            }));
            pinkform.refdd = givenDatespit.split("-").join("");
            pinkform.status = ''
            pinkform.update_tt = givenDate.toTimeString().split(' ')[0];
            pinkform.usr_create = usr
            pinkform.usr_create_dd = givenDatespit.split("-").join("");
            pinkform.usr_create_tt = givenDate.toTimeString().split(' ')[0];
            pinkform.usrname = usr
            pinkform.update_dd = givenDatespit.split("-").join("");
            const resinsert = await this.pinkfromService.insertPinkfrom(pinkform);
            let resinserthinv: any[] = [];
            if (pinkhinv != null) {
                pinkhinv.refno = generatedValue
                pinkhinv.invno = invnonew;
                pinkhinv.update_tt = givenDate.toTimeString().split(' ')[0];
                pinkhinv.usrname = usr
                pinkhinv.update_dd = givenDatespit.split("-").join("");
                pinkhinv.usrname = usr
                pinkhinv.update_dd = givenDatespit.split("-").join("");
                pinkhinv.comcode = comcode
                const result = await this.hinvService.insertPinkHinv(pinkhinv);
                resinserthinv = Array.isArray(result) ? result : [result];
            }

            let newInsertedList = [];
            if (newfoundPinkEinv.length > 0) {
                for (let a of newfoundPinkEinv) {
                    const resinserteinv = await this.einvService.insertPinkEinv(a);
                    newInsertedList.push(resinserteinv);
                }
            }

            const response: InvRes = {
                pinkform: resinsert,
                pinkHinv: pinkhinv ? (Array.isArray(resinserthinv) ? resinserthinv : [resinserthinv]) : [],
                pinkEinv: newInsertedList
            };
            return response;

        } catch (error) {
            console.error('Error Not Found', error);
            throw new HttpException('Error Not Found ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }




}
