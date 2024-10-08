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
}
