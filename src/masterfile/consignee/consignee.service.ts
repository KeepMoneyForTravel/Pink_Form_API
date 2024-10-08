import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Consignee } from 'src/entity/consignee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ConsigneeService {
    constructor(
        @InjectRepository(Consignee)
        private consigneeRepository: Repository<Consignee>,
      ) {}
    async GetConsignee(): Promise<Consignee[] | []> {
        return await this.consigneeRepository.find();
      }
}
