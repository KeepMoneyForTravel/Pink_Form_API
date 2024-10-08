import { Controller, Get } from '@nestjs/common';
import { ProductPinkService } from './productpink.service';
import { ProductPink } from 'src/entity/productpink.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Master File (Company Reference)')
@Controller('productpink')
export class ProductPinkController {
  constructor(private readonly productPinkService: ProductPinkService) {}

  @Get('ProductPink')
  async getAllProductPink(): Promise<ProductPink[]> {
    return this.productPinkService.getAllProductPink();
  }
}
