import { IsOptional, IsString } from 'class-validator';
import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('tariff')
export class Tariff {
  @IsString()
  @PrimaryColumn({ type: 'char', length: 12, charset: 'tis620', collation: 'tis620_bin' })
  tariffclas: string;
 @IsOptional()
  @Column({ type: 'char', length: 1, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  compensatn?: string;
 @IsOptional()
  @Column({ type: 'char', length: 255, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  tdesc1?: string;
 @IsOptional()
  @Column({ type: 'char', length: 255, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  tdesc2?: string;
 @IsOptional()
  @Column({ type: 'char', length: 255, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  edesc1?: string;
 @IsOptional()
  @Column({ type: 'char', length: 255, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  edesc2?: string;
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
