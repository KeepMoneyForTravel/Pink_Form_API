import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Subprovince, SubprovinceJoin } from 'src/entity/customsreference/subprovince.entity';
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

      async GetSubprovinceJoin(): Promise<SubprovinceJoin[]> {
        const query = `
        SELECT 
        s.code
        ,s.name
        ,s.nameth
        ,s.provcode
        ,p.desc1 AS prov_name
        ,s.usrname 
        FROM subprovince AS s 
        LEFT OUTER JOIN province AS p ON s.provcode=p.provcode  
        ORDER BY s.code ASC
        `;
        const grp = await this.subprovinceRepository.query(query);
        return grp
      }
}
