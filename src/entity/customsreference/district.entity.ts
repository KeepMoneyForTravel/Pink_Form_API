import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('district')
export class District {
  @PrimaryColumn({ type: 'char', length: 6, charset: 'tis620', collation: 'tis620_bin' })
  code: string;

  @Column({ type: 'char', length: 4, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  subprovc?: string;

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
