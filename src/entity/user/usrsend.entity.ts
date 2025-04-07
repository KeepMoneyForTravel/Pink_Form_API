import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity('usr_send')
@Unique(['userGroupCode'])
export class UsrSend {
  @PrimaryGeneratedColumn()
  id: number;
  
  
  @Column({ type: 'varchar', length: 45 })
  userGroupCode: string;

  @ApiProperty({ example: '1', default: '0' })
  @Column({ type: 'varchar', length: 45, default: '0' })
  usrloginsurkey: string;

  @ApiProperty({ example: '1', default: '0' })
  @Column({ type: 'varchar', length: 45, default: '0' })
  sendDeclaration: string;

  @ApiProperty({ example: '1', default: '0' })
  @Column({ type: 'varchar', length: 45, default: '0' })
  receiveCusres: string;
}
