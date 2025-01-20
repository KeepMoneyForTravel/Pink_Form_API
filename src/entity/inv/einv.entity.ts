import { IsOptional, IsString } from 'class-validator';
import { Entity, Column, PrimaryColumn, Index } from 'typeorm';

@Entity('pink_einv')
@Index('PK_PINK_EINV', ['comcode', 'refno', 'invno', 'itemno'], { unique: true })
export class PinkEinv {
  @IsString()
  @PrimaryColumn({ type: 'char', length: 15, charset: 'tis620', collation: 'tis620_bin' })
  comcode: string;

  @IsString()
  @PrimaryColumn({ type: 'char', length: 13, charset: 'tis620', collation: 'tis620_bin' })
  refno: string;

  @IsString()
  @PrimaryColumn({ type: 'char', length: 35, charset: 'tis620', collation: 'tis620_bin' })
  invno: string;

  @IsString()
  @PrimaryColumn({ type: 'char', length: 5, charset: 'tis620', collation: 'tis620_bin' })
  itemno: string;

  @IsOptional()
  @Column({ type: 'char', length: 5, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  reflineno: string;

  @IsOptional()
  @Column({ type: 'char', length: 35, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  prodcode: string;

  @IsOptional()
  @Column({ type: 'char', length: 35, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  prodcodetulip: string;

  @IsOptional()
  @Column({ type: 'char', length: 1, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  prodtype: string;

  @IsOptional()
  @Column({ type: 'char', length: 12, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  tariffclas: string;

  @IsOptional()
  @Column({ type: 'char', length: 3, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  tariffstat: string;

  @IsOptional()
  @Column({ type: 'char', length: 3, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  tariffunit: string;

  @IsOptional()
  @Column({ type: 'varchar', length: 512, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  descen: string;

  @IsOptional()
  @Column({ type: 'varchar', length: 512, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  descth: string;

  @IsOptional()
  @Column({ type: 'double', nullable: true })
  qty: number;

  @IsOptional()
  @Column({ type: 'char', length: 3, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  qtyunit: string;

  @IsOptional()
  @Column({ type: 'char', length: 35, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  qtyunit_name: string;

  @IsOptional()
  @Column({ type: 'char', length: 35, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  qty_text: string;

  @IsOptional()
  @Column({ type: 'char', length: 35, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  pkgcode: string;

  @IsOptional()
  @Column({ type: 'char', length: 2, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  pkgunit: string;

  @IsOptional()
  @Column({ type: 'char', length: 35, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  pkg_text: string;

  @IsOptional()
  @Column({ type: 'char', length: 8, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  prod_date: string;

  @IsOptional()
  @Column({ type: 'char', length: 8, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  exp_date: string;

  @IsOptional()
  @Column({ type: 'char', length: 35, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  pd_prov: string;

  @IsOptional()
  @Column({ type: 'char', length: 2, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  pd_provc: string;

  @IsOptional()
  @Column({ type: 'char', length: 35, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  pd_subprov: string;

  @IsOptional()
  @Column({ type: 'char', length: 4, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  pd_subprovc: string;

  @IsOptional()
  @Column({ type: 'char', length: 35, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  pd_district: string;

  @IsOptional()
  @Column({ type: 'char', length: 6, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  pd_districtc: string;

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
