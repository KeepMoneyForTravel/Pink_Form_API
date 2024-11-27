import { Injectable, NotFoundException } from '@nestjs/common';
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
      async getAnnounceByOne(obj: Announce): Promise<Announce> {
        try {
          const desc1 = obj.desc1
          const foundAnnounce = await this.announceRepository.findOne({
            where: {
              desc1: desc1
            },
          });
          if (!foundAnnounce) {
            return null
          }
          return foundAnnounce;
        } catch (error) {
          console.error('Error fetching announce:', error);
          throw new Error(error.message);
        }
      }
      async UpdateAnnounce(obj: Announce, objold: Announce): Promise<Announce> {
        Object.keys(obj).forEach((key) => {
          if (obj[key] !== null && obj[key] !== undefined) {
            (objold as any)[key] = obj[key];
          }
        });
        return await this.announceRepository.save(objold);
      }
      async insertAnnounce(obj: Announce): Promise<Announce> {
        try {
          const newAnnounce = this.announceRepository.create(obj);
          return await this.announceRepository.save(newAnnounce);
        } catch (error) {
          throw new Error('Error inserting new announce: ' + error.message);
        }
      }
      async deleteAnnounce(desc1: string): Promise<boolean> {
        const result = await this.announceRepository.delete({ desc1 });
        if (result.affected === 0) {
          throw new NotFoundException(`not found`);
        }
        return true;
      }
}

