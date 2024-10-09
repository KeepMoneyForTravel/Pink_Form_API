import { Entity, Column, PrimaryColumn, Index } from 'typeorm';

@Entity('exporter')
@Index('PK_EXPORTER', ['comcode', 'code'], { unique: true })
export class Exporter {

  @PrimaryColumn({ type: 'char', length: 15, charset: 'tis620', collation: 'tis620_bin' })
  comcode: string;

  @PrimaryColumn({ type: 'char', length: 50, charset: 'tis620', collation: 'tis620_bin' })
  code: string;

  @Column({ type: 'char', length: 120, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  ename: string;

  @Column({ type: 'char', length: 100, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  eaddr1: string;

  @Column({ type: 'char', length: 100, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  eaddr2: string;

  @Column({ type: 'char', length: 10, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  eaddr2_code: string;

  @Column({ type: 'char', length: 100, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  eaddr3: string;

  @Column({ type: 'char', length: 10, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  eaddr3_code: string;

  @Column({ type: 'char', length: 100, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  eaddr4: string;

  @Column({ type: 'char', length: 10, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  eaddr4_code: string;

  @Column({ type: 'char', length: 10, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  zipcode: string;

  @Column({ type: 'char', length: 2, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  cntrycode: string;

  @Column({ type: 'varchar', length: 100, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  addr_unstruc: string;

  @Column({ type: 'char', length: 35, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  tel: string;

  @Column({ type: 'char', length: 35, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  fax: string;

  @Column({ type: 'char', length: 50, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  email: string;

  @Column({ type: 'char', length: 17, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  taxid: string;

  @Column({ type: 'char', length: 6, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  branch: string;

  @Column({ type: 'char', length: 50, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  posdesc: string;

  @Column({ type: 'char', length: 50, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  contach: string;

  @Column({ type: 'char', length: 100, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  remark1: string;

  @Column({ type: 'char', length: 100, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  remark2: string;

  @Column({ type: 'char', length: 100, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  remark3: string;

  @Column({ type: 'char', length: 30, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  progver: string;

  @Column({ type: 'char', length: 20, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  usrname: string;

  @Column({ type: 'char', length: 8, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  update_dd: string;

  @Column({ type: 'char', length: 9, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  update_tt: string;
}
