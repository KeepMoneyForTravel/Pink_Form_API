import { IsOptional, IsString } from 'class-validator';
import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('country')
export class Country {
  @IsString()
  @PrimaryColumn({ type: 'char', length: 2, charset: 'tis620', collation: 'tis620_bin' })
  code: string;
  @IsOptional()
  @Column({ type: 'char', length: 3, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  code2?: string;
  @IsOptional()
  @Column({ type: 'char', length: 3, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  code3?: string;
  @IsOptional()
  @Column({ type: 'char', length: 35, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  name?: string;
  @IsOptional()
  @Column({ type: 'char', length: 35, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  name1?: string;
  @IsOptional()
  @Column({ type: 'char', length: 35, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  name2?: string;
  @IsOptional()
  @Column({ type: 'char', length: 3, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  currency?: string;
  @IsOptional()
  @Column({ type: 'char', length: 1, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  wtocountry?: string;
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
