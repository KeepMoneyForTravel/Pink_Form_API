import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PinkfromReq, Pinkform } from 'src/entity/inv/pinkfrom.entity';
import { Between, Repository } from 'typeorm';

@Injectable()
export class PinkfromService {
    constructor(
        @InjectRepository(Pinkform)
        private pinkformRepository: Repository<Pinkform>,
    ) { }
    headpink: Pinkform[] | []
    async GetpinkfromStatus(): Promise<Pinkform[]> {
        return await this.pinkformRepository
            .createQueryBuilder('pinkform')
            .select('DISTINCT pinkform.status')
            .getRawMany();
    }
    async GetPinkform(obj: PinkfromReq): Promise<Pinkform[] | []> {
        if (obj.comcode != null && obj.refddfrom != null) {
            this.headpink = await this.pinkformRepository.find(
                {
                    where: {
                        refdd: Between(obj.refddfrom, obj.refddto),
                        comcode: obj.comcode
                    }
                }
            );
        } else if (obj.comcode == null && obj.refddfrom != null) {
            this.headpink = await this.pinkformRepository.find(
                {
                    where: {
                        refdd: Between(obj.refddfrom, obj.refddto)
                    }
                }
            );
        } else {
            this.headpink = await this.pinkformRepository.find()
        }
        return this.headpink
    }
    async GetpinkfromDesc(comcode: string): Promise<string> {
        const result = await this.pinkformRepository.query(
            `
            SELECT refno 
            FROM apitestd_pinkfrom.pinkform 
            WHERE comcode = ? 
            ORDER by refno DESC
            LIMIT 1;
            `,
            [comcode]
        );
        return result[0]?.refno || null;
    }
    async insertPinkfrom(obj: Pinkform): Promise<Pinkform> {
        try {
            const newPinkform = this.pinkformRepository.create(obj);
            return await this.pinkformRepository.save(newPinkform);
        } catch (error) {
            throw new Error('Error inserting new Pinkform: ' + error.message);
        }
    }

    async getPinkfromByOne(obj: Pinkform): Promise<Pinkform> {
        try {
            const comcode = obj.comcode
            const refno = obj.refno
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
}
