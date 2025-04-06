import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity('usr_tran')
@Unique(['userGroupCode', 'rowdec'])
export class UsrTran {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  userGroupCode: string;

  @Column({ type: 'varchar', length: 45, nullable: true })
  rowdec?: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  show?: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  add?: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  edit?: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  delete?: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  copy?: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  close?: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  unclose?: string;

  @Column({ type: 'varchar', length: 45, nullable: true })
  previewDd?: string;

  @Column({ type: 'varchar', length: 45, nullable: true })
  viewXML?: string;

  @Column({ type: 'varchar', length: 45, nullable: true })
  viewresponse?: string;

  @Column({ type: 'varchar', length: 45, nullable: true })
  changeInv?: string;

  @Column({ type: 'varchar', length: 45, nullable: true })
  Recalculate?: string;
}



