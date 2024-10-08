import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UnitPack } from 'src/entity/customsreference/unitpack.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UnitpackService {
    constructor(
        @InjectRepository(UnitPack )
        private unitPackRepository: Repository<UnitPack >,
      ) {}

      async GetUnitPack(): Promise<UnitPack[] | []> {
        return await this.unitPackRepository.find();
      }
}
