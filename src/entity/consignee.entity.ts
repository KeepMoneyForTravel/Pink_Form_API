import { IsString } from 'class-validator';
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('consignee')
export class Consignee {
  @IsString()
  @PrimaryColumn({ type: 'char', length: 15 })
  comcode: string;
  @IsString()
  @PrimaryColumn({ type: 'char', length: 50 })
  code: string;
  @IsString()
  @Column({ type: 'char', length: 20, nullable: true })
  exportercode?: string;
  @IsString()
  @Column({ type: 'char', length: 70, nullable: true })
  name?: string;
  @IsString()
  @Column({ type: 'char', length: 70, nullable: true })
  tname?: string;
  @IsString()
  @Column({ type: 'char', length: 70, nullable: true })
  addr1?: string;
  @IsString()
  @Column({ type: 'char', length: 35, nullable: true })
  addr2?: string;
  @IsString()
  @Column({ type: 'char', length: 35, nullable: true })
  addr3?: string;
  @IsString()
  @Column({ type: 'char', length: 35, nullable: true })
  addr4?: string;
  @IsString()
  @Column({ type: 'char', length: 2, nullable: true })
  cntrycode?: string;
  @IsString()
  @Column({ type: 'char', length: 9, nullable: true })
  postcode?: string;
  @IsString()
  @Column({ type: 'char', length: 35, nullable: true })
  tel?: string;
  @IsString()
  @Column({ type: 'char', length: 35, nullable: true })
  fax?: string;
  @IsString()
  @Column({ type: 'char', length: 50, nullable: true })
  email?: string;
  @IsString()
  @Column({ type: 'varchar', length: 100, nullable: true })
  addr_unstruc?: string;
  @IsString()
  @Column({ type: 'char', length: 30, nullable: true })
  progver?: string;
  @IsString()
  @Column({ type: 'char', length: 20, nullable: true })
  usrname?: string;
  @IsString()
  @Column({ type: 'char', length: 8, nullable: true })
  update_dd?: string;
  @IsString()
  @Column({ type: 'char', length: 9, nullable: true })
  update_tt?: string;
}
