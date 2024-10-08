import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('province')
export class Province {
  @PrimaryColumn({ type: 'char', length: 2, charset: 'tis620', collation: 'tis620_bin' })
  provcode: string;

  @Column({ type: 'char', length: 70, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  desc1?: string;

  @Column({ type: 'char', length: 70, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  descen?: string;

  @Column({ type: 'char', length: 30, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  progver?: string;

  @Column({ type: 'char', length: 20, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  usrname?: string;

  @Column({ type: 'char', length: 8, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  update_dd?: string;

  @Column({ type: 'char', length: 9, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  update_tt?: string;
}
