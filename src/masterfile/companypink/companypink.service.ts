import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanyPink } from 'src/entity/companypink.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CompanypinkService {
    constructor(
        @InjectRepository(CompanyPink)
        private companyPinkRepository: Repository<CompanyPink>,
      ) { }
      async GetCompanyPink(): Promise<CompanyPink[] | []> {
        return await this.companyPinkRepository.find();
      }
      async getCompanyPinkByOne(obj: CompanyPink): Promise<CompanyPink> {
        try {
          const comcode = obj.comcode
          const foundCompanyPink = await this.companyPinkRepository.findOne({
            where: {
              comcode: comcode,
            },
          });
          if (!foundCompanyPink) {
            return null
          }
          return foundCompanyPink;
        } catch (error) {
          console.error('Error fetching companyPink:', error);
          throw new Error(error.message);
        }
      }
      async UpdateCompanyPink(obj: CompanyPink, objold: CompanyPink): Promise<CompanyPink> {
        Object.keys(obj).forEach((key) => {
          if (obj[key] !== null && obj[key] !== undefined) {
            (objold as any)[key] = obj[key];
          }
        });
        return await this.companyPinkRepository.save(objold);
      }
      async insertCompanyPink(obj: CompanyPink): Promise<CompanyPink> {
        try {
          const newCompanyPink = this.companyPinkRepository.create(obj);
          return await this.companyPinkRepository.save(newCompanyPink);
        } catch (error) {
          throw new Error('Error inserting new companyPink: ' + error.message);
        }
      }
    
      async deleteCompanyPink(comcode: string): Promise<boolean> {
        const result = await this.companyPinkRepository.delete({ comcode });
        if (result.affected === 0) {
          throw new NotFoundException(`CompanyPink with comcode ${comcode}  not found`);
        }
        return true;
      }
 }
