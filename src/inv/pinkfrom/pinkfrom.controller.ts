import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Patch } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PinkfromService } from './pinkfrom.service';
import { InvRes, Pinkform, PinkfromReq } from 'src/entity/inv/pinkfrom.entity';
import { HinvService } from '../hinv/hinv.service';
import { PinkfromHeadReq, PinkHinv } from 'src/entity/inv/hinv.entity';
import { EinvService } from '../einv/einv.service';
import { UserService } from 'src/user/user.service';
import e from 'express';
import { ExportCertificateDto } from 'src/entity/report.entity';

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

    @Patch('Copypinkfrom/:refno/:comcode/:usr/:isinv')
    async ICopypinkfrom(@Param('refno') refno: string, @Param('comcode') comcode: string, @Param('usr') usr: string, @Param('isinv') isinv: string) {
        let pinkform: any = null;

        try {
            const lastRef = await this.pinkfromService.GetpinkfromDesc(comcode);
            let resa: string = '';
            if (lastRef) {
                const prefix = lastRef.slice(0, 4);
                const numericPart = lastRef.slice(4);
                const incrementedNumber = (parseInt(numericPart) + 1).toString().padStart(numericPart.length, '0');
                resa = prefix + incrementedNumber;
            } else {
                resa = await this.pinkfromService.Getrefid(comcode);
            }
            const foundPinkfrom = await this.pinkfromService.getPinkfromByOneNoComp(refno);
            const now = new Date();
            const dateStr = now.toISOString().split('T')[0].replace(/-/g, '');
            const timeStr = now.toTimeString().split(' ')[0];
            let resinserthinv: any[] = [];
            const newInsertedList = [];
            if (isinv != 'noinv') {
                const foundPinkHinv = await this.hinvService.getPinkHinvfromByOneNoComp(refno);
                if (foundPinkHinv) {
                    const pinkhinv = {
                        ...foundPinkHinv,
                        refno: resa,
                        invno: isinv,
                        update_tt: timeStr,
                        usrname: usr,
                        update_dd: dateStr,
                        comcode
                    };
                    const result = await this.hinvService.insertPinkHinv(pinkhinv);
                    resinserthinv = Array.isArray(result) ? result : [result];
                }
                const foundPinkEinv = await this.einvService.GetPinkEinvbyoneNoComp(refno);
                const updatedEinv = foundPinkEinv.map(item => ({
                    ...item,
                    refno: resa,
                    usrname: usr,
                    update_dd: dateStr,
                    update_tt: timeStr

                }));
                for (const item of updatedEinv) {
                    const result = await this.einvService.insertPinkEinv(item);
                    newInsertedList.push(result);
                }
            }
            foundPinkfrom.comcode = comcode;
            foundPinkfrom.refno = resa;
            foundPinkfrom.refdd = dateStr;
            foundPinkfrom.status = '';
            foundPinkfrom.update_tt = timeStr;
            foundPinkfrom.usr_create = usr;
            foundPinkfrom.usr_create_dd = dateStr;
            foundPinkfrom.usr_create_tt = timeStr;
            foundPinkfrom.usrname = usr;
            foundPinkfrom.update_dd = dateStr;

            const resinsert = await this.pinkfromService.insertPinkfrom(foundPinkfrom);

            return {
                pinkform: resinsert,
                pinkHinv: resinserthinv,
                pinkEinv: newInsertedList
            };

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
            const res2 = await this.einvService.ChangeEinv(comcode, refno, invnoold, invnonew);
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

    @Patch('CopyChangeInv/:comcode/:refnonew/:refnoold/:invnoold/:invnonew/:usr')
    async ICopyChangeInv(
        @Param('comcode') comcode: string,
        @Param('refnonew') refnonew: string,
        @Param('refnoold') refnoold: string,
        @Param('invnoold') invnoold: string,
        @Param('invnonew') invnonew: string,
        @Param('usr') usr: string,
        @Body() body: string[]
    ) {
        try {
            const foundPinkfrom = await this.pinkfromService.getPinkfromByOneNoComp(refnonew);
            const foundPinkHinv = await this.hinvService.getPinkHinvfromByOneNoComp(refnoold);
            const now = new Date();
            const dateStr = now.toISOString().split('T')[0].replace(/-/g, '');
            const timeStr = now.toTimeString().split(' ')[0];
            let resinserthinv: any[] = [];
            const pinkhinv = {
                ...foundPinkHinv,
                refno: refnonew,
                invno: invnonew,
                update_tt: timeStr,
                usrname: usr,
                update_dd: dateStr,
                comcode
            };
            const result = await this.hinvService.insertPinkHinv(pinkhinv);
            resinserthinv = Array.isArray(result) ? result : [result];
            const newInsertedList = [];
            if (body && body.length > 0) {
                const foundPinkEinv = await this.einvService.GetPinkEinvbyoneNoCompAndList(refnoold, body);
                const updatedEinv = foundPinkEinv.map(item => ({
                    ...item,
                    refno: refnonew,
                    usrname: usr,
                    update_dd: dateStr,
                    update_tt: timeStr
                }));
                for (const item of updatedEinv) {
                    const result = await this.einvService.insertPinkEinv(item);
                    newInsertedList.push(result);
                }
            }
            return {
                pinkform: foundPinkfrom,
                pinkHinv: resinserthinv,
                pinkEinv: newInsertedList
            };
        } catch (error) {
            console.error('Error Not Found', error);
            throw new HttpException('Error Not Found ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get('ReportDraft/:refno')
    async IReportDraft(@Param('refno') refno: string) {
        try {
            const data = await this.pinkfromService.GetExportCertificateData(refno);

            if (!data || data.length === 0) {
                throw new HttpException('No data found for the given reference number', HttpStatus.NOT_FOUND);
            }

            const firstRecord = data[0];
            const res = new ExportCertificateDto();
            const formatDate = (dateStr) => {
                if (!dateStr || dateStr.length !== 8) return '';
                const year = dateStr.substring(0, 4);
                const month = dateStr.substring(4, 6);
                const day = dateStr.substring(6, 8);
                return `${day}/${month}/${year}`;
            };

            // Certificate Information
            res.certificate = {
                certno: firstRecord.certno || '',
                refno: firstRecord.refno || ''
            };

            res.consignee = {
                cn_code: firstRecord.cn_code || '',
                cn_name: firstRecord.cn_name || '',
                cn_addr1: firstRecord.cn_addr1 || '',
                cn_addr2: firstRecord.cn_addr2 || '',
                cn_addr3: firstRecord.cn_addr3 || '',
                cn_addr4: firstRecord.cn_addr4 || '',
                cn_cntrycode: firstRecord.cn_cntrycode || '',
                cn_zipcode: firstRecord.cn_zipcode || '',
                cn_unstruc: firstRecord.cn_unstruc || ''
            };

            // Exporter Information
            res.exporter = {
                name: firstRecord.com_name || '',
                add1: firstRecord.com_addr1 || '',
                add2: firstRecord.com_addr2 || '',
                add3: firstRecord.com_addr3 || '',
                add4: firstRecord.com_addr4 || '',
                zipcode: firstRecord.com_zipcode || '',
                entryname: firstRecord.com_cntryname || '',
                unsture: firstRecord.com_unstruc || ''
            };

            // Products Information
            res.products = data.map(item => ({
                descen: item.descen || '',
                qty: item.qty || 0,
                qtyunit_name: item.qtyunit_name || '',
                pd_district: item.pd_district || '',
                pd_subprov: item.pd_subprov || '',
                pd_provc: item.pd_provc || '',
                pd_prov: item.pd_prov || '',
                pkgcode: item.pkgcode || '',
                prod_date: formatDate(item.prod_date || ''),
                exp_date: formatDate(item.exp_date || ''),
                district_nameth: item.district_nameth || '',
                subprovince_nameth: item.subprovince_nameth || '',
                province_nameth: item.province_nameth || '',
                qty_text: item.qty_text || '',
                pkg_text: item.pkg_text || '',
                descth: item.descth || ''
            })).filter(product => product.descen); // Filter out empty products

            // Transport Information
            res.transport = {
                transmode: firstRecord.transmode || '',
                dep: firstRecord.departdd || '',
                portname: firstRecord.portname || '',
                port_entryname: firstRecord.port_cntryname || ''
            };

            // Certification Information
            res.certification = {
                approve_d: formatDate(firstRecord.approve_dd || ''),
                ready_d: formatDate(firstRecord.ready_dd || '')
            };

            // Invoice Information
            res.invoice = {
                invno: firstRecord.invno || '',
                remark: firstRecord.remark1 || ''
            };

            return res;

        } catch (error) {
            console.error('Error Not Found', error);
            throw new HttpException('Error Not Found ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }





}
