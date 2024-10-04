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
