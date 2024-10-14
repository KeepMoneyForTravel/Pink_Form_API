import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { District } from 'src/entity/customsreference/district.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DistrictService {
    constructor(
        @InjectRepository(District)
        private districtRepository: Repository<District>,
      ) {}

      async GetDistrict(): Promise<District[] | []> {
        return await this.districtRepository.find();
      }
      async getDistrictByOne(obj: District): Promise<District> {
        try {
          const code = obj.code
          const foundDistrict = await this.districtRepository.findOne({
            where: {
              code: code
            },
          });
          if (!foundDistrict) {
            return null
          }
          return foundDistrict;
        } catch (error) {
          console.error('Error fetching district:', error);
          throw new Error(error.message);
        }
      }
      async UpdateDistrict(obj: District, objold: District): Promise<District> {
        Object.keys(obj).forEach((key) => {
          if (obj[key] !== null && obj[key] !== undefined) {
            (objold as any)[key] = obj[key];
          }
        });
        return await this.districtRepository.save(objold);
      }
      async insertDistrict(obj: District): Promise<District> {
        try {
          const newDistrict = this.districtRepository.create(obj);
          return await this.districtRepository.save(newDistrict);
        } catch (error) {
          throw new Error('Error inserting new district: ' + error.message);
        }
      }
}
