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

      async GetAccno(comcode: string): Promise<Accno[] | []> {
        return await this.accnoRepository.find(
          {
            where: {
              comcode: comcode
            }
          }
        );
      }
      async getAccnoByOne(obj: Accno): Promise<Accno> {
        try {
          const accno = obj.accno
          const comcode = obj.comcode
          const foundAccno = await this.accnoRepository.findOne({
            where: {
              accno: accno,
              comcode: comcode,
            },
          });
          if (!foundAccno) {
            return null
          }
          return foundAccno;
        } catch (error) {
          console.error('Error fetching accno:', error);
          throw new Error(error.message);
        }
      }
      async UpdateAccno(obj: Accno, objold: Accno): Promise<Accno> {
        Object.keys(obj).forEach((key) => {
          if (obj[key] !== null && obj[key] !== undefined) {
            (objold as any)[key] = obj[key];
          }
        });
        return await this.accnoRepository.save(objold);
      }
      async insertAccno(obj: Accno): Promise<Accno> {
        try {
          const newAccno = this.accnoRepository.create(obj);
          return await this.accnoRepository.save(newAccno);
        } catch (error) {
          throw new Error('Error inserting new accno: ' + error.message);
        }
      }
}

