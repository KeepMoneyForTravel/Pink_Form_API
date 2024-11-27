import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UnitPack } from 'src/entity/customsreference/unitpack.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UnitpackService {
    constructor(
        @InjectRepository(UnitPack )
        private unitPackRepository: Repository<UnitPack >,
      ) {}

      async GetUnitPack(): Promise<UnitPack[] | []> {
        return await this.unitPackRepository.find();
      }

      async getUnitPackByOne(obj: UnitPack): Promise<UnitPack> {
        try {
          const code = obj.code
          const foundUnitPack = await this.unitPackRepository.findOne({
            where: {
              code: code
            },
          });
          if (!foundUnitPack) {
            return null
          }
          return foundUnitPack;
        } catch (error) {
          console.error('Error fetching unitPack:', error);
          throw new Error(error.message);
        }
      }
      async UpdateUnitPack(obj: UnitPack, objold: UnitPack): Promise<UnitPack> {
        Object.keys(obj).forEach((key) => {
          if (obj[key] !== null && obj[key] !== undefined) {
            (objold as any)[key] = obj[key];
          }
        });
        return await this.unitPackRepository.save(objold);
      }
      async insertUnitPack(obj: UnitPack): Promise<UnitPack> {
        try {
          const newUnitPack = this.unitPackRepository.create(obj);
          return await this.unitPackRepository.save(newUnitPack);
        } catch (error) {
          throw new Error('Error inserting new unitPack: ' + error.message);
        }
      }
      async deleteUnitpack(code: string): Promise<boolean> {
        const result = await this.unitPackRepository.delete({ code });
        if (result.affected === 0) {
          throw new NotFoundException(`not found`);
        }
        return true;
      }
}
