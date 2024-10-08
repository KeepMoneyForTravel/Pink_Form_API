import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Port } from 'src/entity/customsreference/port.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PortService {
    constructor(
        @InjectRepository(Port)
        private portRepository: Repository<Port>,
      ) {}

      async GetPort(): Promise<Port[] | []> {
        return await this.portRepository.find();
      }
}
