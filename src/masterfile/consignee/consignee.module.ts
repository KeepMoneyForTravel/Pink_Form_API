import { Module } from '@nestjs/common';
import { ConsigneeController } from './consignee.controller';
import { Consignee } from 'src/entity/consignee.entity';
import { ConsigneeService } from './consignee.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Consignee])], 
    providers: [ConsigneeService],
    controllers: [ConsigneeController],
    exports: [ConsigneeService],
})
export class ConsigneeModule {}
