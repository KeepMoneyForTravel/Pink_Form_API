import { Body, Controller, Get, HttpException, HttpStatus, Param, Patch } from '@nestjs/common';
import { ProductPinkService } from './productpink.service';
import { ProductPink } from 'src/entity/productpink.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Master File (Company Reference)')
@Controller('productpink')
export class ProductPinkController {
  constructor(private readonly productPinkService: ProductPinkService) {}

  @Get('GetProductPink/:comcode')
  async getAllProductPink(@Param('comcode') comcode: string): Promise<ProductPink[]> {
    return this.productPinkService.getAllProductPink(comcode);
  }
  @Patch('UpdateOrInsertProductPink')
    async IUpdateOrInsertProductPink(@Body() obj : ProductPink) {
        try {
            const foundProductPink = await this.productPinkService.getProductPinkByOne(obj); 
            if(foundProductPink != null){
              const res = await this.productPinkService.UpdateProductPink(obj , foundProductPink); 
              return res;
            }else{
              const res = await this.productPinkService.insertProductPink(obj); 
              return res;
            }
        } catch (error) {
            console.error('Error Not Found', error);
            throw new HttpException('Error Not Found: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
