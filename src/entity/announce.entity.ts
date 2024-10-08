import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('announce')
export class Announce {
  
  @PrimaryColumn({ type: 'varchar', length: 512, charset: 'tis620', collation: 'tis620_bin' })
  desc1: string;

  @Column({ type: 'char', length: 255, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  desc2: string;

  @Column({ type: 'char', length: 30, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  progver: string;

  @Column({ type: 'char', length: 20, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  usrname: string;

  @Column({ type: 'char', length: 8, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  update_dd: string;

  @Column({ type: 'char', length: 9, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  update_tt: string;
}
