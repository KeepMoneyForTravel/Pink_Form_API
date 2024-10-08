import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('subprovince')
export class Subprovince {
  @PrimaryColumn({ type: 'char', length: 4, charset: 'tis620', collation: 'tis620_bin' })
  code: string;

  @Column({ type: 'char', length: 2, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  provcode?: string;

  @Column({ type: 'char', length: 100, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  name?: string;

  @Column({ type: 'char', length: 100, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  nameth?: string;

  @Column({ type: 'char', length: 30, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  progver?: string;

  @Column({ type: 'char', length: 20, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  usrname?: string;

  @Column({ type: 'char', length: 8, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  update_dd?: string;

  @Column({ type: 'char', length: 9, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  update_tt?: string;
}
