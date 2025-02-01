import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsOptional, IsString, IsBoolean } from 'class-validator';

@Entity('ugpermissions')
export class UgPermissions {
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @Column({ type: 'varchar', length: 50, charset: 'tis620', collation: 'tis620_bin' })
  user_group_code: string;

  @IsOptional()
  @Column({ type: 'varchar', length: 255, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  description: string;

  @IsOptional()
  @Column({ type: 'varchar', length: 50, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  category: string;

  @IsOptional()
  @Column({ type: 'varchar', length: 255, charset: 'tis620', collation: 'tis620_bin', nullable: true })
  modulename: string;

  @Column({ type: 'tinyint', width: 1, default: 0 })
  showpermission: boolean;

  @Column({ type: 'tinyint', width: 1, default: 0 })
  addpermission: boolean;

  @Column({ type: 'tinyint', width: 1, default: 0 })
  editpermission: boolean;

  @Column({ type: 'tinyint', width: 1, default: 0 })
  deletepermission: boolean;

  @Column({ type: 'tinyint', width: 1, default: 0 })
  copypermission: boolean;

  @Column({ type: 'tinyint', width: 1, default: 0 })
  reportpermission: boolean;

  @Column({ type: 'tinyint', width: 1, default: 0 })
  exportpermission: boolean;

  @Column({ type: 'tinyint', width: 1, default: 0 })
  closepermission: boolean;

  @Column({ type: 'tinyint', width: 1, default: 0 })
  unclosepermission: boolean;

  @Column({ type: 'tinyint', width: 1, default: 0 })
  previewDdpermission: boolean;

  @Column({ type: 'tinyint', width: 1, default: 0 })
  viewXMLpermission: boolean;

  @Column({ type: 'tinyint', width: 1, default: 0 })
  viewResponsespermission: boolean;

  @Column({ type: 'tinyint', width: 1, default: 0 })
  changeinvoicesnopermission: boolean;

  @Column({ type: 'tinyint', width: 1, default: 0 })
  recalculatepermission: boolean;

  @IsString()
  @Column({ type: 'varchar', length: 100, charset: 'tis620', collation: 'tis620_bin', default: '' })
  usrname: string;

  @IsOptional()
  @Column({ type: 'date', nullable: true })
  update_dd: Date;

  @IsOptional()
  @Column({ type: 'time', nullable: true })
  update_tt: string;
}
