import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductPink } from 'src/entity/productpink.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductPinkService {
  constructor(
    @InjectRepository(ProductPink)
    private productPinkService: Repository<ProductPink>,
  ) {}

  async getAllProductPink(comcode: string): Promise<ProductPink[]> {
    return await this.productPinkService.find(
      {
        where: {
          comcode: comcode
        }
      }
    );
  }

  async getProductPinkByOne(obj: ProductPink): Promise<ProductPink> {
    try {
      const code = obj.code
      const comcode = obj.comcode
      const cust = obj.cust
      const foundProductPink = await this.productPinkService.findOne({
        where: {
          code: code,
          comcode: comcode,
          cust:cust
        },
      });
      if (!foundProductPink) {
        return null
      }
      return foundProductPink;
    } catch (error) {
      console.error('Error fetching productPink:', error);
      throw new Error(error.message);
    }
  }
  async UpdateProductPink(obj: ProductPink, objold: ProductPink): Promise<ProductPink> {
    Object.keys(obj).forEach((key) => {
      if (obj[key] !== null && obj[key] !== undefined) {
        (objold as any)[key] = obj[key];
      }
    });
    return await this.productPinkService.save(objold);
  }
  async insertProductPink(obj: ProductPink): Promise<ProductPink> {
    try {
      const newProductPink = this.productPinkService.create(obj);
      return await this.productPinkService.save(newProductPink);
    } catch (error) {
      throw new Error('Error inserting new productPink: ' + error.message);
    }
  }
}
