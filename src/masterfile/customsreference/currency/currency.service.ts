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
}
