import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('consignee')
export class Consignee {
  @PrimaryColumn({ type: 'char', length: 15 })
  comcode: string;

  @PrimaryColumn({ type: 'char', length: 50 })
  code: string;

  @Column({ type: 'char', length: 20, nullable: true })
  exportercode?: string;

  @Column({ type: 'char', length: 70, nullable: true })
  name?: string;

  @Column({ type: 'char', length: 70, nullable: true })
  tname?: string;

  @Column({ type: 'char', length: 70, nullable: true })
  addr1?: string;

  @Column({ type: 'char', length: 35, nullable: true })
  addr2?: string;

  @Column({ type: 'char', length: 35, nullable: true })
  addr3?: string;

  @Column({ type: 'char', length: 35, nullable: true })
  addr4?: string;

  @Column({ type: 'char', length: 2, nullable: true })
  cntrycode?: string;

  @Column({ type: 'char', length: 9, nullable: true })
  postcode?: string;

  @Column({ type: 'char', length: 35, nullable: true })
  tel?: string;

  @Column({ type: 'char', length: 35, nullable: true })
  fax?: string;

  @Column({ type: 'char', length: 50, nullable: true })
  email?: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  addr_unstruc?: string;

  @Column({ type: 'char', length: 30, nullable: true })
  progver?: string;

  @Column({ type: 'char', length: 20, nullable: true })
  usrname?: string;

  @Column({ type: 'char', length: 8, nullable: true })
  update_dd?: string;

  @Column({ type: 'char', length: 9, nullable: true })
  update_tt?: string;
}
