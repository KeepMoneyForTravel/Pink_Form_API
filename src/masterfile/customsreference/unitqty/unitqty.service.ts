import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Unitqty } from 'src/entity/customsreference/unitqty.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UnitqtyService {
    constructor(
        @InjectRepository(Unitqty)
        private unitqtyRepository: Repository<Unitqty>,
      ) {}

      async GetUnitqty(): Promise<Unitqty[] | []> {
        return await this.unitqtyRepository.find();
      }

      async getUnitqtyByOne(obj: Unitqty): Promise<Unitqty> {
        try {
          const code = obj.code
          const foundUnitqty = await this.unitqtyRepository.findOne({
            where: {
              code: code
            },
          });
          if (!foundUnitqty) {
            return null
          }
          return foundUnitqty;
        } catch (error) {
          console.error('Error fetching unitqty:', error);
          throw new Error(error.message);
        }
      }
      async UpdateUnitqty(obj: Unitqty, objold: Unitqty): Promise<Unitqty> {
        Object.keys(obj).forEach((key) => {
          if (obj[key] !== null && obj[key] !== undefined) {
            (objold as any)[key] = obj[key];
          }
        });
        return await this.unitqtyRepository.save(objold);
      }
      async insertUnitqty(obj: Unitqty): Promise<Unitqty> {
        try {
          const newUnitqty = this.unitqtyRepository.create(obj);
          return await this.unitqtyRepository.save(newUnitqty);
        } catch (error) {
          throw new Error('Error inserting new unitqty: ' + error.message);
        }
      }
      async deleteUnitqty(code: string): Promise<boolean> {
        const result = await this.unitqtyRepository.delete({ code });
        if (result.affected === 0) {
          throw new NotFoundException(`not found`);
        }
        return true;
      }
}
