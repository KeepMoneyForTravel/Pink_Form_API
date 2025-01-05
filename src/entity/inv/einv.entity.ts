import { IsOptional, IsString } from 'class-validator';
import { Entity, Column, PrimaryColumn, Index } from 'typeorm';

@Entity('accno')
@Index('PK_ACCNO', ['comcode', 'accno', 'accno1'], { unique: true })
export class Accno {
  @IsString()
  @PrimaryColumn({ type: 'char', length: 15, charset: 'tis620', collation: 'tis620_bin' })
  comcode: string;
}
