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
import { AnnounceModule } from './masterfile/announce/announce.module';
import { CountryController } from './masterfile/customsreference/country/country.controller';
import { CountryModule } from './masterfile/customsreference/country/country.module';
import { ProvinceService } from './masterfile/customsreference/province/province.service';
import { ProvinceModule } from './masterfile/customsreference/province/province.module';
import { SubprovinceModule } from './masterfile/customsreference/subprovince/subprovince.module';
import { DistrictService } from './masterfile/customsreference/district/district.service';
import { DistrictController } from './masterfile/customsreference/district/district.controller';
import { DistrictModule } from './masterfile/customsreference/district/district.module';
import { PortModule } from './masterfile/customsreference/port/port.module';
import { UnitpackService } from './masterfile/customsreference/unitpack/unitpack.service';
import { UnitpackController } from './masterfile/customsreference/unitpack/unitpack.controller';
import { UnitpackModule } from './masterfile/customsreference/unitpack/unitpack.module';
import { CurrencyModule } from './masterfile/customsreference/currency/currency.module';
import { TariffService } from './masterfile/customsreference/tariff/tariff.service';
import { TariffController } from './masterfile/customsreference/tariff/tariff.controller';
import { TariffModule } from './masterfile/customsreference/tariff/tariff.module';
import { StatcodeModule } from './masterfile/customsreference/statcode/statcode.module';
import { UnitqtyService } from './masterfile/customsreference/unitqty/unitqty.service';
import { UnitqtyController } from './masterfile/customsreference/unitqty/unitqty.controller';
import { UnitqtyModule } from './masterfile/customsreference/unitqty/unitqty.module';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { PinkfromController } from './inv/pinkfrom/pinkfrom.controller';
import { PinkfromService } from './inv/pinkfrom/pinkfrom.service';
import { PinkfromModule } from './inv/pinkfrom/pinkfrom.module';
import { HinvController } from './inv/hinv/hinv.controller';
import { HinvService } from './inv/hinv/hinv.service';
import { HinvModule } from './inv/hinv/hinv.module';
import { EinvService } from './inv/einv/einv.service';
import { EinvController } from './inv/einv/einv.controller';
import { EinvModule } from './inv/einv/einv.module';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'apitestd_pinkfrom',
      password: 'Wtf02848113',
      database: 'apitestd_pinkfrom',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: '127.0.0.1',
    //   port: 3306,
    //   username: 'root',
    //   password: '1234',
    //   database: 'tulip_pinkform',
    //   entities: [],
    //   synchronize: true,
    //   autoLoadEntities: true,
    // }),
    AuthModule,
    ExporterModule,
    ConsigneeModule,
    AuthoModule,
    ProductPinkModule,
    BankModule,
    AccnoModule,
    AnnounceModule,
    CountryModule,
    ProvinceModule,
    SubprovinceModule,
    DistrictModule,
    PortModule,
    UnitpackModule,
    CurrencyModule,
    TariffModule,
    StatcodeModule,
    UnitqtyModule,
    UserModule,
    PinkfromModule,
    HinvModule,
    EinvModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
