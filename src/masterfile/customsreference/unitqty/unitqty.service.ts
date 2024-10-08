import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Unitqty } from 'src/entity/customsreference/unitqty.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UnitqtyService {
    constructor(
        @InjectRepository(Unitqty)
        private unitqtyRepository: Repository<Unitqty>,
      ) {}

      async GetUnitqty(): Promise<Unitqty[] | []> {
        return await this.unitqtyRepository.find();
      }
}
