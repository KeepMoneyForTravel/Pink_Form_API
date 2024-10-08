import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Subprovince } from 'src/entity/customsreference/subprovince.entity';
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
}
