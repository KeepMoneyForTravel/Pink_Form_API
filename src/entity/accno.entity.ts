import { Entity, Column, PrimaryColumn, Index } from 'typeorm';

@Entity('accno')
@Index('PK_ACCNO', ['comcode', 'accno', 'accno1'], { unique: true })
export class Accno {
  
  @PrimaryColumn({ type: 'char', length: 15, charset: 'tis620', collation: 'tis620_bin' })
  comcode: string;

  @PrimaryColumn({ type: 'char', length: 35, charset: 'tis620', collation: 'tis620_bin' })
  accno: string;

  @Column({ type: 'char', length: 35, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  accno1: string;

  @Column({ type: 'char', length: 50, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  accname: string;

  @Column({ type: 'char', length: 10, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  bankcode: string;

  @Column({ type: 'char', length: 10, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  branchcode: string;

  @Column({ type: 'char', length: 20, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  exportercode: string;

  @Column({ type: 'char', length: 1, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  acctype: string;

  @Column({ type: 'char', length: 30, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  progver: string;

  @Column({ type: 'char', length: 20, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  usrname: string;

  @Column({ type: 'char', length: 8, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  update_dd: string;

  @Column({ type: 'char', length: 9, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  update_tt: string;
}
