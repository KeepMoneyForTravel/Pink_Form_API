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

      async getPortByOne(obj: Port): Promise<Port> {
        try {
          const isocode = obj.isocode
          const foundPort = await this.portRepository.findOne({
            where: {
              isocode: isocode
            },
          });
          if (!foundPort) {
            return null
          }
          return foundPort;
        } catch (error) {
          console.error('Error fetching port:', error);
          throw new Error(error.message);
        }
      }
      async UpdatePort(obj: Port, objold: Port): Promise<Port> {
        Object.keys(obj).forEach((key) => {
          if (obj[key] !== null && obj[key] !== undefined) {
            (objold as any)[key] = obj[key];
          }
        });
        return await this.portRepository.save(objold);
      }
      async insertPort(obj: Port): Promise<Port> {
        try {
          const newPort = this.portRepository.create(obj);
          return await this.portRepository.save(newPort);
        } catch (error) {
          throw new Error('Error inserting new port: ' + error.message);
        }
      }
}
