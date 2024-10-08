import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tariff } from 'src/entity/customsreference/tariff.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TariffService {
    constructor(
        @InjectRepository(Tariff)
        private tariffRepository: Repository<Tariff>,
      ) {}

      async GetTariff(): Promise<Tariff[] | []> {
        return await this.tariffRepository.find();
      }
}
