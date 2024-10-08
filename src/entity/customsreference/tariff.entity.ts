import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('tariff')
export class Tariff {
  @PrimaryColumn({ type: 'char', length: 12, charset: 'tis620', collation: 'tis620_bin' })
  tariffclas: string;

  @Column({ type: 'char', length: 1, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  compensatn?: string;

  @Column({ type: 'char', length: 255, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  tdesc1?: string;

  @Column({ type: 'char', length: 255, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  tdesc2?: string;

  @Column({ type: 'char', length: 255, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  edesc1?: string;

  @Column({ type: 'char', length: 255, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  edesc2?: string;

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
