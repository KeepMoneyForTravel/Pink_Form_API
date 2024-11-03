import { ApiProperty } from '@nestjs/swagger';
import { IsString, MAX_LENGTH } from 'class-validator';
import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, Unique, OneToMany } from 'typeorm';

@Entity('usernamepink')
export class UsernamePink {
  @PrimaryColumn({ type: 'char', length: 60, charset: 'tis620', collation: 'tis620_bin' })
  username: string;

  @Column({ type: 'char', length: 60, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  usrpasswrd: string;

  @Column({ type: 'char', length: 80, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  usrpasswrd2: string;

  @Column({ type: 'char', length: 80, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  usrpasswrd3: string;

  @Column({ type: 'char', length: 10, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  grpcode: string;

  @Column({ type: 'char', length: 20, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  meiosysuser: string;

  @Column({ type: 'char', length: 50, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  meiosyspassword: string;

  @Column({ type: 'char', length: 50, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  certserialno: string;

  @Column({ type: 'char', length: 50, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  certserialno2013: string;

  @Column({ type: 'char', length: 3, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  syscfgcode: string;

  @Column({ type: 'char', length: 20, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  strucver: string;

  @Column({ type: 'char', length: 20, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  fldchk: string;

  @Column({ type: 'char', length: 30, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  progver: string;

  @Column({ type: 'char', length: 20, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  usrname: string;

  @Column({ type: 'char', length: 8, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  update_dd: string;

  @Column({ type: 'char', length: 9, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  update_tt: string;
}


@Entity('_usrgrantpink')
@Unique(['usr_name', 'comcode'])
export class UsrGrantPink {
  @Column({ type: 'char', length: 60, charset: 'tis620', collation: 'tis620_bin' })
  usr_name: string;

  @Column({ type: 'char', length: 15, charset: 'tis620', collation: 'tis620_bin' })
  comcode: string;

  @Column({ type: 'char', length: 1, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  isright?: string;

  @Column({ type: 'char', length: 200, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  matchcode?: string;

  @Column({ type: 'char', length: 80, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  rem01?: string;

  @Column({ type: 'char', length: 1, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  upd_stat?: string;

  @Column({ type: 'char', length: 30, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  progver?: string;

  @Column({ type: 'char', length: 20, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  usrname?: string;

  @Column({ type: 'char', length: 8, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  update_dd?: string;

  @Column({ type: 'char', length: 9, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  update_tt?: string;

  @Column({ type: 'char', length: 4, charset: 'tis620', collation: 'tis620_bin' })
  datayear: string;
}

@Entity()
export class AuthDetail {
  @Column()
  usr_name: string;
  @Column()
  comcode: string;
  @Column()
  ename: string;
  @Column()
  refid: string;
  @Column()
  taxid: string;
  @Column()
  gateway: string;
  @Column()
  org: string;
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
  @ApiProperty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsString()
  password: string;
}

@Entity() 
export class ResLogin {

  @Column({ type: 'varchar', length: 60 }) 
  username: string;

  @Column({ type: 'char', length: 15 }) 
  grpcode: string;

  @Column({ type: 'char', length: 1024}) 
  tokenres: string;

  @OneToMany(() => AuthDetail, (authDetail) => authDetail)
  authDetails: AuthDetail[];
}
