import { Entity, Column, PrimaryColumn, Index } from 'typeorm';

@Entity('autho')
@Index('PK_AUTHO', ['comcode', 'code'], { unique: true })
export class Autho {
  @PrimaryColumn({ type: 'char', length: 15 })
  comcode: string;

  @PrimaryColumn({ type: 'char', length: 35 })
  code: string;

  @Column({ type: 'char', length: 60, nullable: true })
  name?: string;

  @Column({ type: 'char', length: 50, nullable: true })
  addr1?: string;

  @Column({ type: 'char', length: 50, nullable: true })
  addr2?: string;

  @Column({ type: 'char', length: 50, nullable: true })
  addr3?: string;

  @Column({ type: 'char', length: 30, nullable: true })
  autho_idno?: string;

  @Column({ type: 'char', length: 8, nullable: true })
  issuedd?: string;

  @Column({ type: 'char', length: 8, nullable: true })
  expiredd?: string;

  @Column({ type: 'char', length: 30, nullable: true })
  posdesc?: string;

  @Column({ type: 'char', length: 8, nullable: true })
  birthdd?: string;

  @Column({ type: 'char', length: 20, nullable: true })
  xnational?: string;

  @Column({ type: 'char', length: 20, nullable: true })
  taxid?: string;

  @Column({ type: 'char', length: 1, nullable: true })
  position?: string;

  @Column({ type: 'char', length: 30, nullable: true })
  progver?: string;

  @Column({ type: 'char', length: 20, nullable: true })
  usrname?: string;

  @Column({ type: 'char', length: 8, nullable: true })
  update_dd?: string;

  @Column({ type: 'char', length: 9, nullable: true })
  update_tt?: string;
}
