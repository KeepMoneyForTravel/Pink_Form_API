import { Entity, Column, PrimaryColumn, Unique } from 'typeorm';

@Entity('productpink')
@Unique('PK_PRODUCTPINK', ['comcode', 'cust', 'code'])
export class ProductPink {
  @PrimaryColumn({ type: 'char', length: 15, charset: 'tis620', collation: 'tis620_bin' })
  comcode: string;

  @PrimaryColumn({ type: 'char', length: 20, charset: 'tis620', collation: 'tis620_bin' })
  cust: string;

  @PrimaryColumn({ type: 'char', length: 35, charset: 'tis620', collation: 'tis620_bin' })
  code: string;

  @Column({ type: 'char', length: 35, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  prodcodetulip: string;

  @Column({ type: 'char', length: 1, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  prodtype: string;

  @Column({ type: 'varchar', length: 512, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  descen: string;

  @Column({ type: 'varchar', length: 512, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  descth: string;

  @Column({ type: 'char', length: 35, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  brand: string;

  @Column({ type: 'char', length: 12, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  tariffclas: string;

  @Column({ type: 'char', length: 3, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  tariffstat: string;

  @Column({ type: 'char', length: 3, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  qtyunit: string;

  @Column({ type: 'char', length: 35, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  qtyunit_name: string;

  @Column({ type: 'char', length: 35, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  qty_text: string;

  @Column({ type: 'char', length: 35, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  pkgcode: string;

  @Column({ type: 'char', length: 2, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  pkgunit: string;

  @Column({ type: 'char', length: 35, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  pkg_text: string;

  @Column({ type: 'char', length: 8, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  prod_date: string;

  @Column({ type: 'char', length: 8, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  exp_date: string;

  @Column({ type: 'char', length: 35, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  pd_prov: string;

  @Column({ type: 'char', length: 2, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  pd_provc: string;

  @Column({ type: 'char', length: 35, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  pd_subprov: string;

  @Column({ type: 'char', length: 4, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  pd_subprovc: string;

  @Column({ type: 'char', length: 35, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  pd_district: string;

  @Column({ type: 'char', length: 6, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  pd_districtc: string;

  @Column({ type: 'char', length: 30, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  progver: string;

  @Column({ type: 'char', length: 20, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  usrname: string;

  @Column({ type: 'char', length: 8, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  update_dd: string;

  @Column({ type: 'char', length: 9, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  update_tt: string;
}
