import { IsOptional, IsString } from 'class-validator';
import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('statcode')
export class Statcode {
  @IsString()
  @PrimaryColumn({ type: 'char', length: 12, charset: 'tis620', collation: 'tis620_bin' })
  tariffclas: string;
  @IsString()
  @PrimaryColumn({ type: 'char', length: 3, charset: 'tis620', collation: 'tis620_bin' })
  tariffstat: string;
  @IsOptional()
  @Column({ type: 'char', length: 3, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  unitcode?: string;
  @IsOptional()
  @Column({ type: 'char', length: 250, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  desc1?: string;
  @IsOptional()
  @Column({ type: 'char', length: 250, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  desc2?: string;
  @IsOptional()
  @Column({ type: 'char', length: 60, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  desc3?: string;
  @IsOptional()
  @Column({ type: 'char', length: 10, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  announceno?: string;
  @IsOptional()
  @Column({ type: 'char', length: 8, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  announcedd?: string;
  @IsOptional()
  @Column({ type: 'char', length: 8, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  startdate?: string;
  @IsOptional()
  @Column({ type: 'char', length: 8, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  finishdate?: string;
  @IsOptional()
  @Column({ type: 'char', length: 30, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  progver?: string;
  @IsOptional()
  @Column({ type: 'char', length: 20, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  usrname?: string;
  @IsOptional()
  @Column({ type: 'char', length: 8, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  update_dd?: string;
  @IsOptional()
  @Column({ type: 'char', length: 9, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  update_tt?: string;
}
