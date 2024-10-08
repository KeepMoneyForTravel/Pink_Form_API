import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { District } from 'src/entity/customsreference/district.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DistrictService {
    constructor(
        @InjectRepository(District)
        private districtRepository: Repository<District>,
      ) {}

      async GetDistrict(): Promise<District[] | []> {
        return await this.districtRepository.find();
      }
}
