import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Country } from 'src/entity/customsreference/country.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CountryService {
    constructor(
        @InjectRepository(Country)
        private countryRepository: Repository<Country>,
      ) {}

      async GetCountry(): Promise<Country[] | []> {
        return await this.countryRepository.find();
      }
      async getCountryPerPage(page: number, limit: number): Promise<Country[]> {
        const offset = (page - 1) * limit;
        return await this.countryRepository.find({
          take: limit,
          skip: offset,
        });
      }
      async getCountryByOne(obj: Country): Promise<Country> {
        try {
          const code = obj.code
          const foundCountry = await this.countryRepository.findOne({
            where: {
              code: code
            },
          });
          if (!foundCountry) {
            return null
          }
          return foundCountry;
        } catch (error) {
          console.error('Error fetching country:', error);
          throw new Error(error.message);
        }
      }
      async UpdateCountry(obj: Country, objold: Country): Promise<Country> {
        Object.keys(obj).forEach((key) => {
          if (obj[key] !== null && obj[key] !== undefined) {
            (objold as any)[key] = obj[key];
          }
        });
        return await this.countryRepository.save(objold);
      }
      async insertCountry(obj: Country): Promise<Country> {
        try {
          const newCountry = this.countryRepository.create(obj);
          return await this.countryRepository.save(newCountry);
        } catch (error) {
          throw new Error('Error inserting new country: ' + error.message);
        }
      }
      async deleteCountry(code: string): Promise<boolean> {
        const result = await this.countryRepository.delete({ code });
        if (result.affected === 0) {
          throw new NotFoundException(`not found`); 
        }
        return true;
      }
}
