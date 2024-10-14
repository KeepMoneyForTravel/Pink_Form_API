import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Subprovince } from 'src/entity/customsreference/subprovince.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SubprovinceService {
    constructor(
        @InjectRepository(Subprovince)
        private subprovinceRepository: Repository<Subprovince>,
      ) {}

      async GetSubprovince(): Promise<Subprovince[] | []> {
        return await this.subprovinceRepository.find();
      }
      async getSubprovinceByOne(obj: Subprovince): Promise<Subprovince> {
        try {
          const code = obj.code
          const foundSubprovince = await this.subprovinceRepository.findOne({
            where: {
              code: code
            },
          });
          if (!foundSubprovince) {
            return null
          }
          return foundSubprovince;
        } catch (error) {
          console.error('Error fetching subprovince:', error);
          throw new Error(error.message);
        }
      }
      async UpdateSubprovince(obj: Subprovince, objold: Subprovince): Promise<Subprovince> {
        Object.keys(obj).forEach((key) => {
          if (obj[key] !== null && obj[key] !== undefined) {
            (objold as any)[key] = obj[key];
          }
        });
        return await this.subprovinceRepository.save(objold);
      }
      async insertSubprovince(obj: Subprovince): Promise<Subprovince> {
        try {
          const newSubprovince = this.subprovinceRepository.create(obj);
          return await this.subprovinceRepository.save(newSubprovince);
        } catch (error) {
          throw new Error('Error inserting new subprovince: ' + error.message);
        }
      }
}
