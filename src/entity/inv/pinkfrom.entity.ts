import { Entity, PrimaryColumn, Column, Index, Unique } from 'typeorm';
import { IsString, IsOptional, IsNumber, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PinkHinv } from './hinv.entity';
import { PinkEinv } from './einv.entity';

@Entity('pinkform')
@Index('PK_PINKFORM', ['comcode', 'refno'], { unique: true })
export class Pinkform {
  @PrimaryColumn({ type: 'char', length: 15, charset: 'tis620', collation: 'tis620_bin' })
  @IsString()
  comcode: string;

  @PrimaryColumn({ type: 'char', length: 13, charset: 'tis620', collation: 'tis620_bin' })
  @IsString()
  refno: string;

  @Column({ type: 'char', length: 8, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  refdd?: string;

  @Column({ type: 'char', length: 5, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  status?: string;

  @Column({ type: 'char', length: 5, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  status2?: string;

  @Column({ type: 'char', length: 25, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  issue_date?: string;

  @Column({ type: 'char', length: 1, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  reqtype?: string;

  @Column({ type: 'char', length: 35, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  rcvno?: string;

  @Column({ type: 'char', length: 35, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  certno?: string;

  @Column({ type: 'char', length: 50, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  com_code?: string;

  @Column({ type: 'char', length: 17, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  com_taxid?: string;

  @Column({ type: 'char', length: 6, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  com_branch?: string;

  @Column({ type: 'varchar', length: 120, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  com_name?: string;

  @Column({ type: 'varchar', length: 100, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  com_addr1?: string;

  @Column({ type: 'varchar', length: 100, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  com_addr2?: string;

  @Column({ type: 'char', length: 10, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  com_addr2_code?: string;

  @Column({ type: 'varchar', length: 100, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  com_addr3?: string;

  @Column({ type: 'char', length: 10, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  com_addr3_code?: string;

  @Column({ type: 'varchar', length: 100, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  com_addr4?: string;

  @Column({ type: 'char', length: 10, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  com_addr4_code?: string;

  @Column({ type: 'char', length: 10, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  com_zipcode?: string;

  @Column({ type: 'char', length: 2, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  com_cntrycode?: string;

  @Column({ type: 'char', length: 35, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  com_tel?: string;

  @Column({ type: 'char', length: 35, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  com_fax?: string;

  @Column({ type: 'varchar', length: 100, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  com_unstruc?: string;

  @Column({ type: 'char', length: 17, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  br_taxid?: string;

  @Column({ type: 'char', length: 6, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  br_branch?: string;

  @Column({ type: 'char', length: 35, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  mg_code?: string;

  @Column({ type: 'char', length: 17, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  mg_taxid?: string;

  @Column({ type: 'char', length: 35, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  mg_name?: string;

  @Column({ type: 'char', length: 50, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  cn_code?: string;

  @Column({ type: 'varchar', length: 120, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  cn_name?: string;

  @Column({ type: 'varchar', length: 120, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  cn_addr1?: string;

  @Column({ type: 'varchar', length: 100, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  cn_addr2?: string;

  @Column({ type: 'varchar', length: 100, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  cn_addr3?: string;

  @Column({ type: 'varchar', length: 100, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  cn_addr4?: string;

  @Column({ type: 'char', length: 10, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  cn_zipcode?: string;

  @Column({ type: 'char', length: 2, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  cn_cntrycode?: string;

  @Column({ type: 'varchar', length: 100, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  cn_unstruc?: string;

  @Column({ type: 'char', length: 1, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  transmode?: string;

  @Column({ type: 'char', length: 5, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  dischargeport?: string;

  @Column({ type: 'char', length: 8, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  departdd?: string;

  @Column({ type: 'char', length: 1, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  objcode?: string;

  @Column({ type: 'varchar', length: 256, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  remark1?: string;

  @Column({ type: 'double', nullable: true })
  @IsNumber()
  @IsOptional()
  no_copy?: number;

  @Column({ type: 'char', length: 35, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  ex_dclno?: string;

  @Column({ type: 'char', length: 8, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  dcl_date?: string;

  @Column({ type: 'char', length: 1, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  post_indi?: string;

  @Column({ type: 'char', length: 1, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  br_pay_indi?: string;

  @Column({ type: 'char', length: 3, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  bankcode?: string;

  @Column({ type: 'char', length: 6, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  bankbranch?: string;

  @Column({ type: 'char', length: 35, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  accno?: string;

  @Column({ type: 'double', nullable: true })
  @IsNumber()
  @IsOptional()
  feeamt?: number;

  @Column({ type: 'char', length: 3, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  fee_cur?: string;

  @Column({ type: 'double', nullable: true })
  @IsNumber()
  @IsOptional()
  post_amt?: number;

  @Column({ type: 'char', length: 3, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  post_cur?: string;

  @Column({ type: 'double', nullable: true })
  @IsNumber()
  @IsOptional()
  totpay_amt?: number;

  @Column({ type: 'char', length: 3, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  totpay_cur?: string;

  @Column({ type: 'varchar', length: 255, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  invno?: string;

  @Column({ type: 'char', length: 8, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  queue_dd?: string;

  @Column({ type: 'char', length: 8, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  queue_tt?: string;

  @Column({ type: 'char', length: 8, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  approve_dd?: string;

  @Column({ type: 'char', length: 8, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  approve_tt?: string;

  @Column({ type: 'char', length: 8, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  ready_dd: string | null;

  @Column({ type: 'char', length: 8, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  ready_tt: string | null;

  @Column({ type: 'varchar', length: 150, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  link_billpay: string | null;

  @Column({ type: 'char', length: 8, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  datetrans0: string | null;

  @Column({ type: 'char', length: 8, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  timetrans0: string | null;

  @Column({ type: 'char', length: 8, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  datexml: string | null;

  @Column({ type: 'char', length: 8, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  timexml: string | null;

  @Column({ type: 'varchar', length: 255, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  cusres_msg: string | null;

  @Column({ type: 'char', length: 20, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  usr_create: string | null;

  @Column({ type: 'char', length: 8, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  usr_create_dd: string | null;

  @Column({ type: 'char', length: 9, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  usr_create_tt: string | null;

  @Column({ type: 'char', length: 30, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  progver: string | null;

  @Column({ type: 'char', length: 20, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  usrname: string | null;

  @Column({ type: 'char', length: 8, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  update_dd: string | null;

  @Column({ type: 'char', length: 9, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  update_tt: string | null;

  @Column({ type: 'char', length: 8, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  datestamp: string | null;

  @Column({ type: 'char', length: 8, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  @IsString()
  @IsOptional()
  timestamp: string | null;
}


export class PinkfromReq {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  comcode?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  refddfrom?: string | null;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  refddto?: string | null;
}


export class InvRes {
  pinkform: Pinkform;
  pinkHinv: PinkHinv[] = [];
  pinkEinv: PinkEinv[] = [];
}


