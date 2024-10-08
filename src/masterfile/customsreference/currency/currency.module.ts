import { Module } from '@nestjs/common';
import { CurrencyController } from './currency.controller';
import { CurrencyService } from './currency.service';
import { Currency } from 'src/entity/customsreference/currency.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [CurrencyController],
  providers: [CurrencyService],
  imports: [TypeOrmModule.forFeature([Currency])],
  exports: [CurrencyService],
})
export class CurrencyModule {}
