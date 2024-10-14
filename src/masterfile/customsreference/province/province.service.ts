import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Province } from 'src/entity/customsreference/province.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProvinceService {
    constructor(
        @InjectRepository(Province)
        private provinceRepository: Repository<Province>,
      ) {}

      async GetProvince(): Promise<Province[] | []> {
        return await this.provinceRepository.find();
      }
      async getProvinceByOne(obj: Province): Promise<Province> {
        try {
          const provcode = obj.provcode
          const foundProvince = await this.provinceRepository.findOne({
            where: {
              provcode: provcode
            },
          });
          if (!foundProvince) {
            return null
          }
          return foundProvince;
        } catch (error) {
          console.error('Error fetching province:', error);
          throw new Error(error.message);
        }
      }
      async UpdateProvince(obj: Province, objold: Province): Promise<Province> {
        Object.keys(obj).forEach((key) => {
          if (obj[key] !== null && obj[key] !== undefined) {
            (objold as any)[key] = obj[key];
          }
        });
        return await this.provinceRepository.save(objold);
      }
      async insertProvince(obj: Province): Promise<Province> {
        try {
          const newProvince = this.provinceRepository.create(obj);
          return await this.provinceRepository.save(newProvince);
        } catch (error) {
          throw new Error('Error inserting new province: ' + error.message);
        }
      }
}
