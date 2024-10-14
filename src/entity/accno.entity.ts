import { IsOptional, IsString } from 'class-validator';
import { Entity, Column, PrimaryColumn, Index } from 'typeorm';

@Entity('accno')
@Index('PK_ACCNO', ['comcode', 'accno', 'accno1'], { unique: true })
export class Accno {
  @IsString()
  @PrimaryColumn({ type: 'char', length: 15, charset: 'tis620', collation: 'tis620_bin' })
  comcode: string;
  @IsString()
  @PrimaryColumn({ type: 'char', length: 35, charset: 'tis620', collation: 'tis620_bin' })
  accno: string;
  @IsOptional()
  @Column({ type: 'char', length: 35, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  accno1: string;
  @IsOptional()
  @Column({ type: 'char', length: 50, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  accname: string;
  @IsOptional()
  @Column({ type: 'char', length: 10, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  bankcode: string;
  @IsOptional()
  @Column({ type: 'char', length: 10, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  branchcode: string;
  @IsOptional()
  @Column({ type: 'char', length: 20, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  exportercode: string;
  @IsOptional()
  @Column({ type: 'char', length: 1, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  acctype: string;
  @IsOptional()
  @Column({ type: 'char', length: 30, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  progver: string;
  @IsOptional()
  @Column({ type: 'char', length: 20, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  usrname: string;
  @IsOptional()
  @Column({ type: 'char', length: 8, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  update_dd: string;
  @IsOptional()
  @Column({ type: 'char', length: 9, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  update_tt: string;
}
