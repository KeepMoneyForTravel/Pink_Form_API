import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ExporterModule } from './masterfile/exporter/exporter.module';
import { ConsigneeModule } from './masterfile/consignee/consignee.module';
import { AuthoModule } from './masterfile/autho/autho.module';
import { ProductPinkModule } from './masterfile/productpink/productpink.module';
import { BankModule } from './masterfile/bank/bank.module';
import { AccnoModule } from './masterfile/accno/accno.module';
import { AnnounceService } from './masterfile/announce/announce.service';
import { AnnounceModule } from './masterfile/announce/announce.module';
import { CountryController } from './masterfile/customsreference/country/country.controller';
import { CountryModule } from './masterfile/customsreference/country/country.module';
import { ProvinceService } from './masterfile/customsreference/province/province.service';
import { ProvinceModule } from './masterfile/customsreference/province/province.module';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3308,
      username: 'root',
      password: '',
      database: 'tulip_pinkform',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
    AuthModule,
    ExporterModule,
    ConsigneeModule,
    AuthoModule,
    ProductPinkModule,
    BankModule,
    AccnoModule,
    AnnounceModule,
    CountryModule,
    ProvinceModule
  ],
  controllers: [AppController, CountryController],
  providers: [AppService, ProvinceService],
})
export class AppModule {
}
