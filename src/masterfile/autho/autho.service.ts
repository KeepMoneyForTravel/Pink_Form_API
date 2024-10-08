import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Autho } from 'src/entity/autho.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthoService {
  constructor(
    @InjectRepository(Autho)
    private authoRepository: Repository<Autho>,
  ) {}

  async GetAllAutho(): Promise<Autho[]> {
    return await this.authoRepository.find();
  }
}
