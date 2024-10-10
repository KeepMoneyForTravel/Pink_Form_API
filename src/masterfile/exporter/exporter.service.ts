import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Exporter } from 'src/entity/exporter.entity';
import { Like, Repository } from 'typeorm';

@Injectable()
export class ExporterService {
  constructor(
    @InjectRepository(Exporter)
    private exporterRepository: Repository<Exporter>,
  ) { }
  async GetExporter(comcode: string): Promise<Exporter[] | []> {
    return await this.exporterRepository.find(
      {
        where: {
          comcode: comcode
        }
      }
    );
  }
  async getExporterByOne(obj: Exporter): Promise<Exporter> {
    try {
      const code = obj.code
      const comcode = obj.comcode
      const foundExporter = await this.exporterRepository.findOne({
        where: {
          code: code,
          comcode: comcode,
        },
      });
      if (!foundExporter) {
        return null
      }
      return foundExporter;
    } catch (error) {
      console.error('Error fetching exporter:', error);
      throw new Error(error.message);
    }
  }
  async UpdateExporter(obj: Exporter, objold: Exporter): Promise<Exporter> {
    Object.keys(obj).forEach((key) => {
      if (obj[key] !== null && obj[key] !== undefined) {
        (objold as any)[key] = obj[key];
      }
    });
    return await this.exporterRepository.save(objold);
  }
  async insertExporter(obj: Exporter): Promise<Exporter> {
    try {
      const newExporter = this.exporterRepository.create(obj);
      return await this.exporterRepository.save(newExporter);
    } catch (error) {
      throw new Error('Error inserting new exporter: ' + error.message);
    }
  }

  async getSuggestionByCode(code: string): Promise<Exporter[]> {
    return await this.exporterRepository.find({
      where: { code: Like(`%${code}%`) },
      take: 100
    });
  }
}
