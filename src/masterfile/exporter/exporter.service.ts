import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Exporter } from 'src/entity/exporter.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ExporterService {
    constructor(
        @InjectRepository(Exporter)
        private exporterRepository: Repository<Exporter>,
      ) {}
    async GetExporter(): Promise<Exporter[] | []> {
        return await this.exporterRepository.find();
      }
}
