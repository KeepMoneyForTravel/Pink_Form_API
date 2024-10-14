import { IsOptional, IsString } from 'class-validator';
import { Entity, PrimaryColumn, Column, Index } from 'typeorm';

@Entity('province')
export class Province {
  @IsString()
  @PrimaryColumn({ type: 'char', length: 2, charset: 'tis620', collation: 'tis620_bin' })
  provcode: string;
  @IsOptional()
  @Column({ type: 'char', length: 70, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  desc1?: string;
  @IsOptional()
  @Column({ type: 'char', length: 70, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  descen?: string;
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
