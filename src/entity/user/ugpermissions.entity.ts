import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity('usrgpermission')
@Unique(['userGroupCode', 'rowdec'])
export class Usrg {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  userGroupCode: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  rowdec: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  show: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  add: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  edit: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  delete: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  copy: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  report: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  export: string;
}

export interface PermissionDto {
  id?: number; // optional (ไม่ต้องใช้ก็ได้)
  userGroupCode: string;
  rowdec: string;
  show: string;
  add: string;
  edit: string;
  delete: string;
  copy: string;
  report: string;
  export: string;
}

export interface PermissionDtoSend {
  id?: number;
  userGroupCode: string;
  usrloginsurkey: string;
  sendDeclaration: string;
  receiveCusres: string;
}

export interface PermissionDtoTran {
  id?: number;
  userGroupCode: string;
  rowdec: string;
  show: string;
  add: string;
  edit: string;
  delete: string;
  copy: string;
  close: string;
  unclose: string;
  previewDd: string;
  viewXML: string;
  viewresponse: string;
  changeInv: string;
  Recalculate: string;
}

export interface MasterfilePermissions {
  [key: string]: PermissionDto;
}

export interface MasterfilePermissionsTran {
  [key: string]: PermissionDtoTran;
}

export interface MasterfilePermissionsSend {
  [key: string]: PermissionDtoSend;
}