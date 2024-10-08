import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('statcode')
export class Statcode {
  @PrimaryColumn({ type: 'char', length: 12, charset: 'tis620', collation: 'tis620_bin' })
  tariffclas: string;

  @PrimaryColumn({ type: 'char', length: 3, charset: 'tis620', collation: 'tis620_bin' })
  tariffstat: string;

  @Column({ type: 'char', length: 3, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  unitcode?: string;

  @Column({ type: 'char', length: 250, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  desc1?: string;

  @Column({ type: 'char', length: 250, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  desc2?: string;

  @Column({ type: 'char', length: 60, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  desc3?: string;

  @Column({ type: 'char', length: 10, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  announceno?: string;

  @Column({ type: 'char', length: 8, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  announcedd?: string;

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
