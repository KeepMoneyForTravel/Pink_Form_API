import { IsOptional, IsString } from 'class-validator';
import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('port')
export class Port {
  @IsString()
  @PrimaryColumn({ type: 'char', length: 5, charset: 'tis620', collation: 'tis620_bin' })
  isocode: string;
  @IsOptional()
  @Column({ type: 'char', length: 125, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  portname?: string;
  @IsOptional()
  @Column({ type: 'char', length: 2, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  cntrycode?: string;
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
