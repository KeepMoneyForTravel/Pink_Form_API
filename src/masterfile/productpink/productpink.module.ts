import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductPinkController } from './productpink.controller';
import { ProductPinkService } from './productpink.service';
import { ProductPink } from 'src/entity/productpink.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductPink])],
  controllers: [ProductPinkController],
  providers: [ProductPinkService],
})
export class ProductPinkModule {}