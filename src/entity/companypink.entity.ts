import { IsOptional, IsString } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, Unique, PrimaryColumn } from 'typeorm';

@Entity('_companypink')
@Unique(['comcode'])  
export class CompanyPink {

  @IsString()
  @PrimaryColumn({ type: 'char', length: 15, unique: true })
  comcode: string;

  @IsOptional()
  @Column({ type: 'char', length: 80, nullable: true })
  tname: string;

  @IsOptional()
  @Column({ type: 'char', length: 60, nullable: true })
  taddr1: string;

  @IsOptional()
  @Column({ type: 'char', length: 60, nullable: true })
  taddr2: string;

  @IsOptional()
  @Column({ type: 'char', length: 60, nullable: true })
  taddr3: string;

  @IsOptional()
  @Column({ type: 'char', length: 60, nullable: true })
  taddr4: string;

  @IsOptional()
  @Column({ type: 'char', length: 80, nullable: true })
  ename: string;

  @IsOptional()
  @Column({ type: 'char', length: 60, nullable: true })
  eaddr1: string;

  @IsOptional()
  @Column({ type: 'char', length: 60, nullable: true })
  eaddr2: string;

  @IsOptional()
  @Column({ type: 'char', length: 60, nullable: true })
  eaddr3: string;

  @IsOptional()
  @Column({ type: 'char', length: 60, nullable: true })
  eaddr4: string;

  @IsOptional()
  @Column({ type: 'char', length: 80, nullable: true })
  tel: string;

  @IsOptional()
  @Column({ type: 'char', length: 60, nullable: true })
  fax: string;

  @IsOptional()
  @Column({ type: 'char', length: 10, nullable: true })
  zipcode: string;

  @IsOptional()
  @Column({ type: 'char', length: 80, nullable: true })
  emailaddr: string;

  @IsOptional()
  @Column({ type: 'char', length: 17, nullable: true })
  taxid: string;

  @IsOptional()
  @Column({ type: 'char', length: 15, nullable: true })
  registerno: string;

  @IsOptional()
  @Column({ type: 'char', length: 8, nullable: true })
  branchno: string;

  @IsOptional()
  @Column({ type: 'char', length: 1, nullable: true })
  isbroker: string;

  @IsOptional()
  @Column({ type: 'char', length: 35, nullable: true })
  ediuserid: string;

  @IsOptional()
  @Column({ type: 'char', length: 35, nullable: true })
  express_userid: string;

  @IsOptional()
  @Column({ type: 'char', length: 255, nullable: true })
  org: string;

  @IsOptional()
  @Column({ type: 'char', length: 10, nullable: true })
  refid: string;

  @IsOptional()
  @Column({ type: 'char', length: 10, nullable: true })
  startno: string;

  @IsOptional()
  @Column({ type: 'char', length: 10, nullable: true })
  gateway: string;

  @IsOptional()
  @Column({ type: 'char', length: 220, nullable: true })
  jobnorcv: string;

  @IsOptional()
  @Column({ type: 'char', length: 220, nullable: true })
  jobnorcv1: string;

  @IsOptional()
  @Column({ type: 'char', length: 220, nullable: true })
  jobnorcv2: string;

  @IsOptional()
  @Column({ type: 'char', length: 220, nullable: true })
  jobnorcv3: string;

  @IsOptional()
  @Column({ type: 'char', length: 220, nullable: true })
  jobnorcv4: string;

  @IsOptional()
  @Column({ type: 'char', length: 8, nullable: true })
  jobnorcv_date: string;

  @IsOptional()
  @Column({ type: 'char', length: 12, nullable: true })
  jobnorcv_time: string;

  @IsOptional()
  @Column({ type: 'char', length: 255, nullable: true })
  rem1: string;

  @IsOptional()
  @Column({ type: 'char', length: 255, nullable: true })
  rem2: string;

  @IsOptional()
  @Column({ type: 'char', length: 255, nullable: true })
  rem3: string;

  @IsOptional()
  @Column({ type: 'varchar', length: 35, nullable: true })
  aeos_refno: string;

  @IsOptional()
  @Column({ type: 'char', length: 30, nullable: true })
  progver: string;

  @IsOptional()
  @Column({ type: 'char', length: 20, nullable: true })
  usrname: string;

  @IsOptional()
  @Column({ type: 'char', length: 8, nullable: true })
  update_dd: string;

  @IsOptional()
  @Column({ type: 'char', length: 9, nullable: true })
  update_tt: string;

  @IsOptional()
  @Column({ type: 'char', length: 10, nullable: true })
  preman_refid: string;

  @IsOptional()
  @Column({ type: 'char', length: 10, nullable: true })
  preman_startno: string;

  @IsOptional()
  @Column({ type: 'char', length: 10, nullable: true })
  inland_refid: string;

  @IsOptional()
  @Column({ type: 'char', length: 10, nullable: true })
  inland_startno: string;
}
