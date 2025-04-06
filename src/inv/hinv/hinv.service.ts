import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PinkHinv } from 'src/entity/inv/hinv.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HinvService {
    constructor(
        @InjectRepository(PinkHinv)
        private hinvRepository: Repository<PinkHinv>,
    ) { }
    async getPinkHinvfromByOne(comcode: string, refno: string): Promise<PinkHinv> {
        try {
            const foundPinkHinv = await this.hinvRepository.findOne({
                where: {
                    comcode: comcode,
                    refno: refno
                },
            });
            if (!foundPinkHinv) {
                return null
            }
            return foundPinkHinv;
        } catch (error) {
            console.error('Error fetching pinkHinv:', error);
            throw new Error(error.message);
        }
    }

    async insertPinkHinv(obj: PinkHinv): Promise<PinkHinv> {
        try {
            const foundPinkHinv = this.hinvRepository.create(obj);
            return await this.hinvRepository.save(foundPinkHinv);
        } catch (error) {
            throw new Error('Error inserting new Hinv: ' + error.message);
        }
    }

    async GetPinkHinvbyone(comcode: string, refno: string): Promise<PinkHinv[]> {
        try {
            const foundPinkHinv = await this.hinvRepository.find({
                where: {
                    comcode: comcode,
                    refno: refno,
                },
            });

            if (!foundPinkHinv) {
                return [];
            }

            return foundPinkHinv || [];
        } catch (error) {
            console.error('Error fetching PinkHinv:', error);
            throw new Error(error.message);
        }
    }


    async UpdatePinkHinv(obj: PinkHinv, objold: PinkHinv): Promise<PinkHinv> {
        Object.keys(obj).forEach((key) => {
            if (obj[key] !== null && obj[key] !== undefined) {
                (objold as any)[key] = obj[key];
            }
        });
        return await this.hinvRepository.save(objold);
    }
    async deleteHinv(comcode: string, refno: string, invno: string): Promise<boolean> {
        try {
            const result = await this.hinvRepository.delete({ comcode, refno, invno });
            return result.affected > 0;
        } catch (error) {
            console.error('Error deleting Hinv:', error);
            throw new Error(error.message);
        }
    }
    async ChangeHinv(comcode: string, refno: string, invno: string): Promise<PinkHinv[]> {
        try {
            const updatedRecords = await this.hinvRepository.update(
                {
                    comcode,
                    refno,
                    invno,
                },
                {
                    invno,
                }
            );
            return []
        } catch (error) {
            console.error('Error fetching pinkHinv:', error);
            throw new Error(error.message);
        }
    }
}
