import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('bank')
export class Bank {
  @PrimaryColumn({ type: 'char', length: 3, charset: 'tis620', collation: 'tis620_bin' })
  bankcode: string;

  @Column({ type: 'char', length: 100, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  bankname: string;

  @Column({ type: 'char', length: 5, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  category: string;

  @Column({ type: 'char', length: 30, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  progver: string;

  @Column({ type: 'char', length: 20, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  usrname: string;

  @Column({ type: 'char', length: 8, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  update_dd: string;

  @Column({ type: 'char', length: 9, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  update_tt: string;
}
