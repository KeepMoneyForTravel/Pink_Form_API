import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Currency } from 'src/entity/customsreference/currency.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CurrencyService {
    constructor(
        @InjectRepository(Currency)
        private currencyRepository: Repository<Currency>,
      ) {}

      async GetCurrency(): Promise<Currency[] | []> {
        return await this.currencyRepository.find();
      }
      async getCurrencyByOne(obj: Currency): Promise<Currency> {
        try {
          const code = obj.code
          const foundCurrency = await this.currencyRepository.findOne({
            where: {
              code: code
            },
          });
          if (!foundCurrency) {
            return null
          }
          return foundCurrency;
        } catch (error) {
          console.error('Error fetching currency:', error);
          throw new Error(error.message);
        }
      }
      async UpdateCurrency(obj: Currency, objold: Currency): Promise<Currency> {
        Object.keys(obj).forEach((key) => {
          if (obj[key] !== null && obj[key] !== undefined) {
            (objold as any)[key] = obj[key];
          }
        });
        return await this.currencyRepository.save(objold);
      }
      async insertCurrency(obj: Currency): Promise<Currency> {
        try {
          const newCurrency = this.currencyRepository.create(obj);
          return await this.currencyRepository.save(newCurrency);
        } catch (error) {
          throw new Error('Error inserting new currency: ' + error.message);
        }
      }
}
