import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Statcode } from 'src/entity/customsreference/statcode.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StatcodeService {
    constructor(
        @InjectRepository(Statcode)
        private portRepository: Repository<Statcode>,
      ) {}

      async GetStatcode(): Promise<Statcode[] | []> {
        return await this.portRepository.find();
      }
}
