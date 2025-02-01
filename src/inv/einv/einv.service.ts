import { Injectable, NotFoundException } from '@nestjs/common';
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
    async getEinvByOneItem(obj: PinkEinv): Promise<PinkEinv> {
            try {
              const comcode = obj.comcode
              const refno = obj.comcode
              const invno = obj.comcode
              const itemno = obj.comcode
              const foundPinkEinv = await this.einvRepository.findOne({
                where: { 
                    comcode: comcode,
                    refno: refno,
                    invno: invno,
                    itemno: itemno   
                },
              });
              if (!foundPinkEinv) {
                return null
              }
              return foundPinkEinv;
            } catch (error) {
              console.error('Error fetching pinkEinv:', error);
              throw new Error(error.message);
            }
          }
          async UpdatePinkEinv(obj: PinkEinv, objold: PinkEinv): Promise<PinkEinv> {
            Object.keys(obj).forEach((key) => {
              if (obj[key] !== null && obj[key] !== undefined) {
                (objold as any)[key] = obj[key];
              }
            });
            return await this.einvRepository.save(objold);
          }
          async insertPinkEinv(obj: PinkEinv): Promise<PinkEinv> {
            try {
              const newPinkEinv = this.einvRepository.create(obj);
              return await this.einvRepository.save(newPinkEinv);
            } catch (error) {
              throw new Error('Error inserting new pinkEinv: ' + error.message);
            }
          }
    
          async deleteEinv(comcode: string , refno: string,invno: string,itemno: string): Promise<boolean> {
            const result = await this.einvRepository.delete({ comcode , refno , invno , itemno });
            if (result.affected === 0) {
              throw new NotFoundException(`not found`);
            }
            return true;
          }
}
