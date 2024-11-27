import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tariff } from 'src/entity/customsreference/tariff.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TariffService {
  constructor(
    @InjectRepository(Tariff)
    private tariffRepository: Repository<Tariff>,
  ) { }

  async GetTariff(): Promise<Tariff[] | []> {
    return await this.tariffRepository.find();
  }
  async getTariffByOne(obj: Tariff): Promise<Tariff> {
    try {
      const tariffclas = obj.tariffclas
      const foundTariff = await this.tariffRepository.findOne({
        where: {
          tariffclas: tariffclas
        },
      });
      if (!foundTariff) {
        return null
      }
      return foundTariff;
    } catch (error) {
      console.error('Error fetching tariff:', error);
      throw new Error(error.message);
    }
  }
  async UpdateTariff(obj: Tariff, objold: Tariff): Promise<Tariff> {
    Object.keys(obj).forEach((key) => {
      if (obj[key] !== null && obj[key] !== undefined) {
        (objold as any)[key] = obj[key];
      }
    });
    return await this.tariffRepository.save(objold);
  }
  async insertTariff(obj: Tariff): Promise<Tariff> {
    try {
      const newTariff = this.tariffRepository.create(obj);
      return await this.tariffRepository.save(newTariff);
    } catch (error) {
      throw new Error('Error inserting new tariff: ' + error.message);
    }
  }
  async deleteTariff(tariffclas: string): Promise<boolean> {
    const result = await this.tariffRepository.delete({ tariffclas });
    if (result.affected === 0) {
      throw new NotFoundException(`not found`);
    }
    return true;
  }
}
