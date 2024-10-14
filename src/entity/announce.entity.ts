import { IsOptional, IsString } from 'class-validator';
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('announce')
export class Announce {
  @IsString()
  @PrimaryColumn({ type: 'varchar', length: 512, charset: 'tis620', collation: 'tis620_bin' })
  desc1: string;
  @IsOptional()
  @Column({ type: 'char', length: 255, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  desc2: string;
  @IsOptional()
  @Column({ type: 'char', length: 30, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  progver: string;
  @IsOptional()
  @Column({ type: 'char', length: 20, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  usrname: string;
  @IsOptional()
  @Column({ type: 'char', length: 8, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  update_dd: string;
  @IsOptional()
  @Column({ type: 'char', length: 9, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  update_tt: string;
}
