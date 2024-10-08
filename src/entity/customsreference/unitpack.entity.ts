import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('unitpack')
export class UnitPack {
  @PrimaryColumn({ type: 'char', length: 2, charset: 'tis620', collation: 'tis620_bin' })
  code: string;

  @Column({ type: 'char', length: 100, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  longname?: string;

  @Column({ type: 'char', length: 100, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  name?: string;

  @Column({ type: 'char', length: 100, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  name2?: string;

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
