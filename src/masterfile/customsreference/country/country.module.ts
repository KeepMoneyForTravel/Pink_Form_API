import { Module } from '@nestjs/common';
import { CountryService } from './country.service';
import { Country } from 'src/entity/customsreference/country.entity';
import { CountryController } from './country.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [CountryService],
  imports: [TypeOrmModule.forFeature([Country])],
  controllers: [CountryController],
  exports: [CountryService],
})
export class CountryModule {}
