import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('port')
export class Port {
  @PrimaryColumn({ type: 'char', length: 5, charset: 'tis620', collation: 'tis620_bin' })
  isocode: string;

  @Column({ type: 'char', length: 125, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  portname?: string;

  @Column({ type: 'char', length: 2, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  cntrycode?: string;

  @Column({ type: 'char', length: 8, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  startdate?: string;

  @Column({ type: 'char', length: 8, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  finishdate?: string;

  @Column({ type: 'char', length: 30, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  progver?: string;

  @Column({ type: 'char', length: 20, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  usrname?: string;

  @Column({ type: 'char', length: 8, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  update_dd?: string;

  @Column({ type: 'char', length: 9, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  update_tt?: string;
}
