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

  async GetAllAutho(comcode: string): Promise<Autho[]> {
    return await this.authoRepository.find(
      {
        where: {
          comcode: comcode
        }
      }
    );
  }
  async getAuthoByOne(obj: Autho): Promise<Autho> {
    try {
      const code = obj.code
      const comcode = obj.comcode
      const foundAutho = await this.authoRepository.findOne({
        where: {
          code: code,
          comcode: comcode,
        },
      });
      if (!foundAutho) {
        return null
      }
      return foundAutho;
    } catch (error) {
      console.error('Error fetching autho:', error);
      throw new Error(error.message);
    }
  }
  async UpdateAutho(obj: Autho, objold: Autho): Promise<Autho> {
    Object.keys(obj).forEach((key) => {
      if (obj[key] !== null && obj[key] !== undefined) {
        (objold as any)[key] = obj[key];
      }
    });
    return await this.authoRepository.save(objold);
  }
  async insertAutho(obj: Autho): Promise<Autho> {
    try {
      const newAutho = this.authoRepository.create(obj);
      return await this.authoRepository.save(newAutho);
    } catch (error) {
      throw new Error('Error inserting new autho: ' + error.message);
    }
  }
}
