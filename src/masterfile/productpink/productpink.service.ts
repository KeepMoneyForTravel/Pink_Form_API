import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductPink } from 'src/entity/productpink.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductPinkService {
  constructor(
    @InjectRepository(ProductPink)
    private productPinkRepository: Repository<ProductPink>,
  ) {}

  async getAllProductPink(): Promise<ProductPink[]> {
    return await this.productPinkRepository.find();
  }
}
