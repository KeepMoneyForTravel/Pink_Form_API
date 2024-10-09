import { Injectable } from '@nestjs/common';
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
}
