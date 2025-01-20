import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PinkEinv } from 'src/entity/inv/einv.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EinvService {
    constructor(
        @InjectRepository(PinkEinv)
        private einvRepository: Repository<PinkEinv>,
    ) { }
    async GetPinkEinvbyone(comcode: string, refno: string): Promise<PinkEinv[]> {
        try {
            const foundPinkEinv = await this.einvRepository.find({
                where: {
                    comcode: comcode,
                    refno: refno,
                },
            });

            if (!foundPinkEinv) {
                return [];
            }

            return foundPinkEinv || [];
        } catch (error) {
            console.error('Error fetching PinkEinv:', error);
            throw new Error(error.message);
        }
    }
}
