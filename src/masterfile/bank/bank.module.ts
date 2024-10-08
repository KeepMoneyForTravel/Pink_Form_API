import { Module } from '@nestjs/common';
import { BankController } from './bank.controller';
import { BankService } from './bank.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bank } from 'src/entity/bank.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bank])], 
  providers: [BankService],
  controllers: [BankController],
  exports: [BankService],
})
export class BankModule {}
