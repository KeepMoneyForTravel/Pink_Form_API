import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bank } from 'src/entity/bank.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BankService {
    constructor(
        @InjectRepository(Bank)
        private bankRepository: Repository<Bank>,
      ) {}

      async GetBank(): Promise<Bank[] | []> {
        return await this.bankRepository.find();
      }
}
