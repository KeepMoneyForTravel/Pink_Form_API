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
    async getPinkfromByOne(obj: PinkHinv): Promise<PinkHinv> {
        try {
            const comcode = obj.comcode
            const refno = obj.refno
            const invno = obj.invno
            const foundPinkHinv = await this.hinvRepository.findOne({
                where: {
                    comcode: comcode,
                    refno: refno,
                    invno : invno
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
    async UpdatePinkfrom(obj: PinkHinv, objold: PinkHinv): Promise<PinkHinv> {
        Object.keys(obj).forEach((key) => {
            if (obj[key] !== null && obj[key] !== undefined) {
                (objold as any)[key] = obj[key];
            }
        });
        return await this.hinvRepository.save(objold);
    }
}
