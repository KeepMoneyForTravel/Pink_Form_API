import { IsOptional, IsString } from 'class-validator';
import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('subprovince')
export class Subprovince {
  @IsString()
  @PrimaryColumn({ type: 'char', length: 4, charset: 'tis620', collation: 'tis620_bin' })
  code: string;
 @IsOptional()
  @Column({ type: 'char', length: 2, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  provcode?: string;
 @IsOptional()
  @Column({ type: 'char', length: 100, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  name?: string;
 @IsOptional()
  @Column({ type: 'char', length: 100, nullable: true, charset: 'tis620', collation: 'tis620_bin' })
  nameth?: string;
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
