import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Consignee } from 'src/entity/consignee.entity';
import { Like, Repository } from 'typeorm';

@Injectable()
export class ConsigneeService {
  constructor(
    @InjectRepository(Consignee)
    private consigneeRepository: Repository<Consignee>,
  ) { }
  async GetConsignee(): Promise<Consignee[] | []> {
    return await this.consigneeRepository.find();
  }
  async getSuggestionByCode(code: string): Promise<Consignee[]> {
    return await this.consigneeRepository.find({
      where: { code: Like(`%${code}%`) },
      take: 100
    });
  }
  async getConsigneeByOne(obj: Consignee): Promise<Consignee> {
    try {
      const code = obj.code
      const comcode = obj.comcode
      const foundConsignee = await this.consigneeRepository.findOne({
        where: {
          code: code,
          comcode: comcode
        },
      });
      if (!foundConsignee) {
        return null
      }
      return foundConsignee;
    } catch (error) {
      console.error('Error fetching consignee:', error);
      throw new Error(error.message);
    }
  }
  async UpdateConsignee(obj: Consignee, objold: Consignee): Promise<Consignee> {
    Object.keys(obj).forEach((key) => {
      if (obj[key] !== null && obj[key] !== undefined) {
        (objold as any)[key] = obj[key];
      }
    });
    return await this.consigneeRepository.save(objold);
  }
  async insertConsignee(obj: Consignee): Promise<Consignee> {
    try {
      const newconsignee = this.consigneeRepository.create(obj);
      return await this.consigneeRepository.save(newconsignee);
    } catch (error) {
      throw new Error('Error inserting new consignee: ' + error.message);
    }
  }
}
