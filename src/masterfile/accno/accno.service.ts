import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Accno } from 'src/entity/accno.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AccnoService {
    constructor(
        @InjectRepository(Accno)
        private accnoRepository: Repository<Accno>,
      ) {}

      async GetAccno(): Promise<Accno[] | []> {
        return await this.accnoRepository.find();
      }
}

