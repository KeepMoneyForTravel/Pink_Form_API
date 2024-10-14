import { IsOptional, IsString } from 'class-validator';
import { Entity, Column, PrimaryColumn, Index } from 'typeorm';

@Entity('autho')
@Index('PK_AUTHO', ['comcode', 'code'], { unique: true })
export class Autho {
  @IsString()
  @PrimaryColumn({ type: 'char', length: 15 })
  comcode: string;
  @IsString()
  @PrimaryColumn({ type: 'char', length: 35 })
  code: string;
  @IsOptional()
  @Column({ type: 'char', length: 60, nullable: true })
  name?: string;
  @IsOptional()
  @Column({ type: 'char', length: 50, nullable: true })
  addr1?: string;
  @IsOptional()
  @Column({ type: 'char', length: 50, nullable: true })
  addr2?: string;
  @IsOptional()
  @Column({ type: 'char', length: 50, nullable: true })
  addr3?: string;
  @IsOptional()
  @Column({ type: 'char', length: 30, nullable: true })
  autho_idno?: string;
  @IsOptional()
  @Column({ type: 'char', length: 8, nullable: true })
  issuedd?: string;
  @IsOptional()
  @Column({ type: 'char', length: 8, nullable: true })
  expiredd?: string;
  @IsOptional()
  @Column({ type: 'char', length: 30, nullable: true })
  posdesc?: string;
  @IsOptional()
  @Column({ type: 'char', length: 8, nullable: true })
  birthdd?: string;
  @IsOptional()
  @Column({ type: 'char', length: 20, nullable: true })
  xnational?: string;
  @IsOptional()
  @Column({ type: 'char', length: 20, nullable: true })
  taxid?: string;
  @IsOptional()
  @Column({ type: 'char', length: 1, nullable: true })
  position?: string;
  @IsOptional()
  @Column({ type: 'char', length: 30, nullable: true })
  progver?: string;
  @IsOptional()
  @Column({ type: 'char', length: 20, nullable: true })
  usrname?: string;
  @IsOptional()
  @Column({ type: 'char', length: 8, nullable: true })
  update_dd?: string;
  @IsOptional()
  @Column({ type: 'char', length: 9, nullable: true })
  update_tt?: string;
}
