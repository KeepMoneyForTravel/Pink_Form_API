import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PinkfromReq, Pinkform, ComRes } from 'src/entity/inv/pinkfrom.entity';
import { UsernamePink } from 'src/entity/user/usernamepink.entity';
import { Between, Repository } from 'typeorm';

@Injectable()
export class PinkfromService {
    constructor(
        @InjectRepository(Pinkform)
        private pinkformRepository: Repository<Pinkform>
    ) { }
    headpink: Pinkform[] | []
    async GetpinkfromStatus(): Promise<Pinkform[]> {
        return await this.pinkformRepository
            .createQueryBuilder('pinkform')
            .select('DISTINCT pinkform.status')
            .getRawMany();
    }
    async GetPinkform(obj: PinkfromReq): Promise<Pinkform[] | []> {
        if (obj.user == 'all') {
            if (obj.searchall == '0') {
                this.headpink = await this.pinkformRepository.find(
                    {
                        where: {
                            refdd: Between(obj.refddfrom, obj.refddto),
                            comcode: obj.comcode
                        }
                    }
                );
            } else {
                this.headpink = await this.pinkformRepository.find(
                    {
                        where: {
                            comcode: obj.comcode
                        }
                    }
                );
            }

        } else {
            if (obj.searchall == '0') {
                this.headpink = await this.pinkformRepository.find(
                    {
                        where: {
                            refdd: Between(obj.refddfrom, obj.refddto),
                            comcode: obj.comcode,
                            usr_create: obj.user
                        }
                    }
                );
            } else {
                this.headpink = await this.pinkformRepository.find(
                    {
                        where: {
                            comcode: obj.comcode,
                            usr_create: obj.user
                        }
                    }
                );
            }
        }
        // if (obj.comcode != null && obj.refddfrom != null) {
        //     this.headpink = await this.pinkformRepository.find(
        //         {
        //             where: {
        //                 refdd: Between(obj.refddfrom, obj.refddto),
        //                 comcode: obj.comcode
        //             }
        //         }
        //     );
        // } else if (obj.comcode == null && obj.refddfrom != null) {
        //     this.headpink = await this.pinkformRepository.find(
        //         {
        //             where: {
        //                 refdd: Between(obj.refddfrom, obj.refddto)
        //             }
        //         }
        //     );
        // } else {
        //     this.headpink = await this.pinkformRepository.find()
        // }
        return this.headpink
    }
    async GetpinkfromDesc(comcode: string): Promise<string> {
        const result = await this.pinkformRepository.query(
            `
            SELECT refno 
            FROM pinkform 
            WHERE comcode = ? 
            ORDER by refno DESC
            LIMIT 1;
            `,
            [comcode]
        );
        return result[0]?.refno || null;
    }

    async Getrefid(comcode: string): Promise<string> {
        const result = await this.pinkformRepository.query(
            `
            SELECT CONCAT(refid, startno) AS refid
            FROM _companypink
            WHERE comcode = ?
            LIMIT 1;
            `,
            [comcode]
        );
        return result[0]?.refid || null;
    }
    async insertPinkfrom(obj: Pinkform): Promise<Pinkform> {
        try {
            const newPinkform = this.pinkformRepository.create(obj);
            return await this.pinkformRepository.save(newPinkform);
        } catch (error) {
            throw new Error('Error inserting new Pinkform: ' + error.message);
        }
    }

    async getPinkfromByOne(comcode: string, refno: string): Promise<Pinkform> {
        try {
            const foundPinkform = await this.pinkformRepository.findOne({
                where: {
                    comcode: comcode,
                    refno: refno,
                },
            });
            console.log(foundPinkform);
            if (!foundPinkform) {
                return null
            }
            return foundPinkform;
        } catch (error) {
            console.error('Error fetching pinkform:', error);
            throw new Error(error.message);
        }
    }

    async getPinkfromByOneNoComp(refno: string): Promise<Pinkform> {
        try {
            const foundPinkform = await this.pinkformRepository.findOne({
                where: {
                    refno: refno,
                },
            });
            console.log(foundPinkform);
            if (!foundPinkform) {
                return null
            }
            return foundPinkform;
        } catch (error) {
            console.error('Error fetching pinkform:', error);
            throw new Error(error.message);
        }
    }

    async GetPinkbyone(comcode: string, refno: string): Promise<Pinkform | null> {
        try {
            const foundPinkform = await this.pinkformRepository.findOne({
                where: {
                    comcode: comcode,
                    refno: refno,
                },
            });
            if (!foundPinkform) {
                return null;
            }
            return foundPinkform;
        } catch (error) {
            console.error('Error fetching pinkform:', error);
            throw new Error(error.message);
        }
    }

    async UpdatePinkfrom(obj: Pinkform, objold: Pinkform): Promise<Pinkform> {
        console.log('A');
        Object.keys(obj).forEach((key) => {
            if (obj[key] !== null && obj[key] !== undefined) {
                (objold as any)[key] = obj[key];
            }
        });
        const A = await this.pinkformRepository.save(objold);
        return A

    }
    async deletePinkFrom(comcode: string, refno: string): Promise<boolean> {
        const result = await this.pinkformRepository.delete({ comcode, refno });
        if (result.affected === 0) {
            return false; // No rows deleted
        }
        return true; // Deletion successful
    }
    async GetPinkfromByComcode(comcode: string): Promise<string> {
        const result = await this.pinkformRepository.query(
            `
            SELECT refid 
            FROM _companypink 
            WHERE comcode = ? 
            `,
            [comcode]
        );
        return result;
    }

    async GetPinkfromByNull(comcode: string): Promise<string> {
        const result = await this.pinkformRepository.query(
            `
            SELECT startno 
            FROM _companypink 
            WHERE comcode = ? 
            `,
            [comcode]
        );
        return result;
    }

    async GetExportCertificateData(refno: string): Promise<any[]> {
        const query = `
            SELECT 
            j.comcode,
            j.refno,
            j.certno,
            j.com_name,
            j.com_code,
            j.com_addr1,
            j.com_addr2,
            j.com_addr3,
            j.com_addr4,
            j.com_cntrycode,
            j.com_zipcode,
            j.com_unstruc,
            (SELECT name FROM country WHERE code=j.com_cntrycode) AS com_cntryname,
            j.cn_code,
            j.cn_name,
            j.cn_addr1,
            j.cn_addr2,
            j.cn_addr3,
            j.cn_addr4,
            j.cn_cntrycode,
            j.cn_zipcode,
            j.cn_unstruc,
            (SELECT name FROM country WHERE code=j.cn_cntrycode) AS cn_cntryname,
            j.transmode,
            j.departdd,
            j.dischargeport,
            j.approve_dd,
            j.remark1,
            (SELECT portname FROM port WHERE isocode=j.dischargeport) AS portname,
            (SELECT cntrycode FROM port WHERE isocode=j.dischargeport) AS port_cntrycode,
            (SELECT name FROM country WHERE code=SUBSTRING(j.dischargeport,1,2)) AS port_cntryname,
            h.invno,
            h.invdate,
            e.itemno,
            e.descen,
            e.qty,
            e.qtyunit_name,
            e.pkgcode,
            e.pd_district,
            e.pd_subprov,
            e.pd_prov,
            e.prod_date,
            e.pd_provc,
            e.pd_subprovc,
            e.pd_districtc,
            (SELECT nameth FROM district WHERE code=e.pd_districtc) AS district_nameth,
            (SELECT nameth FROM subprovince WHERE code=e.pd_subprovc) AS subprovince_nameth,
            (SELECT desc1 FROM province WHERE provcode=e.pd_provc) AS province_nameth,
            e.exp_date,
            j.ready_dd,
            e.descth,
            e.qty_text,
            e.pkg_text
            FROM pinkform as j
            LEFT OUTER JOIN pink_hinv as h on j.comcode = h.comcode AND j.refno = h.refno
            LEFT OUTER JOIN pink_einv as e on h.comcode = e.comcode AND h.refno = e.refno AND h.invno=e.invno
            WHERE j.refno = ?
        `;

        const result = await this.pinkformRepository.query(query, [refno]);
        return result;
    }

    async RunSafeSelect(sql: string, params: any[] = []): Promise<any[]> {
        if (!sql) throw new Error('Empty SQL');
        let trimmed = sql.trim();
        // Allow and strip a single trailing semicolon
        if (/;\s*$/.test(trimmed)) {
            trimmed = trimmed.replace(/;\s*$/, '');
        }
        // Must start with SELECT
        if (!/^select\s+/i.test(trimmed)) {
            throw new Error('Only SELECT statements are allowed');
        }
        // Reject internal semicolons (multi statements)
        if (trimmed.includes(';')) {
            throw new Error('Multiple statements are not allowed');
        }
        // Disallow write/DDL keywords
        const forbidden = /\b(insert|update|delete|drop|alter|truncate|create|replace|grant|revoke|commit|rollback)\b/i;
        if (forbidden.test(trimmed)) {
            throw new Error('Only read-only SELECT is permitted');
        }
        // Auto LIMIT safeguard
        let finalSql = trimmed;
        if (!/\blimit\s+\d+/i.test(trimmed)) {
            finalSql = `${trimmed} LIMIT 500`;
        }
        return await this.pinkformRepository.query(finalSql, params);
    }
}
