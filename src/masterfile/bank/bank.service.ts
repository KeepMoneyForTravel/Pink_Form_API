import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bank } from 'src/entity/bank.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BankService {
    constructor(
        @InjectRepository(Bank)
        private bankRepository: Repository<Bank>,
      ) {}

      async GetBank(): Promise<Bank[] | []> {
        return await this.bankRepository.find();
      }

      async getBankByOne(obj: Bank): Promise<Bank> {
        try {
          const bankcode = obj.bankcode
          const foundBank = await this.bankRepository.findOne({
            where: {
              bankcode: bankcode
            },
          });
          console.log(foundBank);
          if (!foundBank) {
            return null
          }
          return foundBank;
        } catch (error) {
          console.error('Error fetching bank:', error);
          throw new Error(error.message);
        }
      }
      async UpdateBank(obj: Bank, objold: Bank): Promise<Bank> {
        Object.keys(obj).forEach((key) => {
          if (obj[key] !== null && obj[key] !== undefined) {
            (objold as any)[key] = obj[key];
          }
        });
        return await this.bankRepository.save(objold);
      }
      async insertBank(obj: Bank): Promise<Bank> {
        try {
          const newBank = this.bankRepository.create(obj);
          return await this.bankRepository.save(newBank);
        } catch (error) {
          throw new Error('Error inserting new bank: ' + error.message);
        }
      }
      async deletebank(bankcode : string): Promise<boolean> {
        const result = await this.bankRepository.delete({ bankcode});
        if (result.affected === 0) {
          throw new NotFoundException(`not found`);
        }
        return true;
      }
}
