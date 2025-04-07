import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyPink } from 'src/entity/companypink.entity';
import { CompanypinkController } from './companypink.controller';
import { CompanypinkService } from './companypink.service';

@Module({
    imports: [TypeOrmModule.forFeature([CompanyPink])],
    controllers: [CompanypinkController],
    providers: [CompanypinkService],
    exports: [CompanypinkService],
})
export class CompanypinkModule { }
