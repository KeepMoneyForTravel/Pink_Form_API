import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsString, IsOptional, IsDate } from 'class-validator';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    add: string;

    @Column({ type: 'datetime', nullable: true })
    bd: Date | null;
}

export class CreateUserDto {
    @IsString()
    readonly name: string;

    @IsString()
    @IsOptional()
    readonly add?: string;

    @IsDate()
    @IsOptional()
    readonly bd?: Date;
}

@Entity()
export class Auth {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  user: string;

  @Column()
  password: string;

  @Column({ default: 'active' }) 
  status: string;
}

export class LoginDto {
    @IsString()
    username: string;
  
    @IsString()
    password: string;
  }


////////////////////////////////////////////////////////////////////////////////////////


@Entity('usernamepink') 
export class UserNamePink {
  @PrimaryGeneratedColumn()
  username: string; 

  @Column()
  usrpasswrd: string; 

  @Column()
  usrpasswrd2: string; 

  @Column()
  grpcode: string; 

  @Column()
  meiosysuser: string; 

  @Column()
  meiosyspassword: string; 

  @Column()
  certserialno: string; 

  @Column()
  certserialno2013: string; 

  @Column()
  syscfgcode: string; 

  @Column()
  strucver: string; 

  @Column()
  fldchk: string; 

  @Column()
  progver: string; 

  @Column()
  usrname: string; 

  @Column()
  update_dd: string; 

  @Column()
  update_tt: string; 

}

@Entity('usergrppink') 
export class UserGrpPink {
  @PrimaryGeneratedColumn()
  grpcode: string; 

  @Column()
  grpname	: string; 
   
  @Column() 
  changepassword	: string; 
   
  @Column() 
  restruc	: string; 
   
  @Column() 
  senddcl_rtc	: string; 
   
  @Column() 
  rcvcusres_rtc	: string; 
   
  @Column() 
  ca_management	: string; 
   
  @Column() 
  hinv	: string; 
   
  @Column() 
  einv	: string; 
   
  @Column() 
  job	: string; 
   
  @Column() 
  company	: string; 
   
  @Column() 
  bank	: string; 
   
  @Column() 
  autho	: string; 
   
  @Column() 
  accno	: string; 
   
  @Column() 
  exporter	: string; 
   
  @Column() 
  consignee	: string; 
   
  @Column() 
  port	: string; 
   
  @Column() 
  announce	: string; 
   
  @Column() 
  tariff	: string; 
   
  @Column() 
  statcode	: string; 
   
  @Column() 
  unitqty	: string; 
   
  @Column() 
  unitpack	: string; 
   
  @Column() 
  currency	: string; 
   
  @Column() 
  province	: string; 
   
  @Column() 
  district	: string; 
   
  @Column() 
  subprovince	: string; 
   
  @Column() 
  country	: string; 
   
  @Column() 
  productpink	: string; 
   
  @Column() 
  pinkform	: string; 
   
  @Column() 
  usergroup	: string; 
   
  @Column() 
  username	: string; 
   
  @Column() 
  fldchk	: string; 
   
  @Column() 
  progver	: string; 
   
  @Column() 
  usrname	: string; 
   
  @Column() 
  update_dd	: string; 
   
  @Column() 
  update_tt	: string; 
   
  @Column() 
  sendcancel_rtc	: string; 
   
  @Column() 
  sendpreman	: string; 
   
  @Column() 
  sendcanpreman	: string; 
   
  @Column() 
  senddcl_imp	: string; 
   
  @Column() 
  sendcancel_imp	: string; 
   
  @Column() 
  rcvcusres_imp	: string; 
   
  @Column() 
  custmanage	: string; 
   
  @Column() 
  bnfcryacc	: string; 
   
  @Column() 
  accno_guarantee	: string; 
   
  @Column() 
  ceptcode	: string; 
   
  @Column() 
  excise	: string; 
   
  @Column() 
  excrate	: string; 
   
  @Column() 
  imdutyr	: string; 
   
  @Column() 
  permit	: string; 
   
  @Column() 
  license_tax	: string; 
   
  @Column() 
  rfdtb	: string; 
   
  @Column() 
  privilege	: string; 
   
  @Column() 
  wtodutyr	: string; 
   
  @Column() 
  depreason	: string; 
   
  @Column() 
  factoryno	: string; 
   
  @Column() 
  prgparam	: string; 
   
  @Column() 
  transset	: string; 
   
  @Column() 
  backupdat	: string; 
   
  @Column() 
  restordat	: string; 
   
  @Column() 
  reandpack	: string; 
   
  @Column() 
  recal	: string; 
   
  @Column() 
  inv_insbtn	: string; 
   
  @Column() 
  exportdatabysql	: string; 
   
  @Column() 
  prod_f6	: string; 
   
  @Column() 
  selectdclform	: string; 
   
  @Column() 
  change_deletejob	: string; 
   
  @Column() 
  useapproved	: string; 
   
  @Column() 
  approved_level	: string; 
   
  @Column() 
  allow_userjob_send	: string; 
   
  @Column() 
  approved_cancel	: string; 
   
  @Column() 
  cannot_unclose	: string; 
   
  @Column() 
  allow_imp_prod_nb	: string; 
   
  @Column() 
  allow_del_prod	: string; 
   
  @Column() 
  bis19fml	: string; 
   
  @Column() 
  boigoods	: string; 
   
  @Column() 
  boilicns	: string; 
   
  @Column() 
  bondfml	: string; 
   
  @Column() 
  dcltype	: string; 
   
  @Column() 
  importer	: string; 
   
  @Column() 
  otherparty	: string; 
   
  @Column() 
  inspectn	: string; 
   
  @Column() 
  place	: string; 
   
  @Column() 
  remfile	: string; 
   
  @Column() 
  tariffseq	: string; 
   
  @Column() 
  imtariff	: string; 
   
  @Column() 
  termpay	: string; 
   
  @Column() 
  unitww	: string; 
   
  @Column() 
  cacert	: string; 
   
  @Column() 
  csvexp	: string; 
   
  @Column() 
  csvcons	: string; 
   
  @Column() 
  csvprod	: string; 
   
  @Column() 
  csvset	: string; 
   
  @Column() 
  establish	: string; 
   
  @Column() 
  vslname	: string; 
   
  @Column() 
  mtermpay	: string; 
   
  @Column() 
  xdclfrm	: string; 
   
  @Column() 
  cusres	: string; 
   
  @Column() 
  product	: string; 
   
  @Column() 
  productrest	: string; 
   
  @Column() 
  exrate	: string; 
   
  @Column() 
  eexpress	: string; 
   
  @Column() 
  remark	: string; 
   
  @Column() 
  shpmark	: string; 
   
  @Column() 
  otherright1	: string; 
   
  @Column() 
  otherright2	: string; 
   
  @Column() 
  otherright3	: string; 
   
  @Column() 
  airline	: string; 
   
  @Column() 
  airlineport	: string; 
   
  @Column() 
  cutlist	: string; 
   
  @Column() 
  permission_goods	: string; 
   
  @Column() 
  taxincentive	: string; 
   
  @Column() 
  loc_goods	: string; 
   
  @Column() 
  request_name	: string; 
   
  @Column() 
  ctrlagency	: string; 
   
  @Column() 
  ctrl_place	: string; 
   
  @Column() 
  exrate_im	: string; 
   
  @Column() 
  exrate_ex	: string; 
   
  @Column() 
  manufacturer	: string; 
   
  @Column() 
  portdnp	: string; 
   
  @Column() 
  taxonomy	: string; 
   
  @Column() 
  prod_type	: string; 
   
  @Column() 
  product_type: string; 

}

@Entity()
export class CompanyStat {

  @Column()
  compcode: string;

  @Column()
  tname: string;

  @Column()
  ename: string;

  @Column()
  status: string;
}


