import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Announce } from 'src/entity/announce.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AnnounceService {
    constructor(
        @InjectRepository(Announce)
        private announceRepository: Repository<Announce>,
      ) {}

      async GetAnnounce(): Promise<Announce[] | []> {
        return await this.announceRepository.find();
      }
}

