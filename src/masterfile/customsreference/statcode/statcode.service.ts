import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Statcode } from 'src/entity/customsreference/statcode.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StatcodeService {
    constructor(
        @InjectRepository(Statcode)
        private statcodeRepository: Repository<Statcode>,
      ) {}

      async GetStatcode(): Promise<Statcode[] | []> {
        return await this.statcodeRepository.find();
      }

      async getStatcodeByOne(obj: Statcode): Promise<Statcode> {
        try {
          const tariffclas = obj.tariffstat
          const tariffstat = obj.tariffstat
          const foundStatcode = await this.statcodeRepository.findOne({
            where: {
              tariffclas: tariffclas,
              tariffstat: tariffstat,
            },
          });
          if (!foundStatcode) {
            return null
          }
          return foundStatcode;
        } catch (error) {
          console.error('Error fetching statcode:', error);
          throw new Error(error.message);
        }
      }
      async UpdateStatcode(obj: Statcode, objold: Statcode): Promise<Statcode> {
        Object.keys(obj).forEach((key) => {
          if (obj[key] !== null && obj[key] !== undefined) {
            (objold as any)[key] = obj[key];
          }
        });
        return await this.statcodeRepository.save(objold);
      }
      async insertStatcode(obj: Statcode): Promise<Statcode> {
        try {
          const newStatcode = this.statcodeRepository.create(obj);
          return await this.statcodeRepository.save(newStatcode);
        } catch (error) {
          throw new Error('Error inserting new statcode: ' + error.message);
        }
      }
}
