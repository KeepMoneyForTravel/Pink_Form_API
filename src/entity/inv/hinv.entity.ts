import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, ValidateNested } from 'class-validator';
import { Entity, PrimaryColumn, Column, Index, Unique } from 'typeorm';
import { Pinkform } from './pinkfrom.entity';

@Entity('pink_hinv')
    @Index('PK_PINK_HINV', ['comcode', 'refno', 'invno'])
    export class PinkHinv {
        @PrimaryColumn({ type: 'char', length: 15, collation: 'tis620_bin', charset: 'tis620' })
        @IsString()
        comcode: string;

        @PrimaryColumn({ type: 'char', length: 13, collation: 'tis620_bin', charset: 'tis620' })
        @IsString()
        refno: string;

        @PrimaryColumn({ type: 'char', length: 35, collation: 'tis620_bin', charset: 'tis620' })
        @IsString()
        invno: string;

        @Column({ type: 'char', length: 8, nullable: true, collation: 'tis620_bin', charset: 'tis620' })
        @IsString()
        @IsOptional()
        invdate?: string | null;

        @Column({ type: 'char', length: 5, nullable: true, collation: 'tis620_bin', charset: 'tis620' })
        @IsString()
        @IsOptional()
        invitemno?: string | null;

        @Column({ type: 'char', length: 35, nullable: true, collation: 'tis620_bin', charset: 'tis620' })
        pono?: string | null;

        @Column({ type: 'char', length: 35, nullable: true, collation: 'tis620_bin', charset: 'tis620' })
        @IsString()
        @IsOptional()
        brand?: string | null;

        @Column({ type: 'double', nullable: true })
        @IsString()
        @IsOptional()
        totalinv?: number | null;

        @Column({ type: 'char', length: 3, nullable: true, collation: 'tis620_bin', charset: 'tis620' })
        @IsString()
        @IsOptional()
        totcurrency?: string | null;

        @Column({ type: 'double', nullable: true })
        @IsString()
        @IsOptional()
        totqty?: number | null;

        @Column({ type: 'char', length: 3, nullable: true, collation: 'tis620_bin', charset: 'tis620' })
        @IsString()
        @IsOptional()
        totqtyunit?: string | null;

        @Column({ type: 'char', length: 30, nullable: true, collation: 'tis620_bin', charset: 'tis620' })
        @IsString()
        @IsOptional()
        progver?: string | null;

        @Column({ type: 'char', length: 20, nullable: true, collation: 'tis620_bin', charset: 'tis620' })
        @IsString()
        @IsOptional()
        usrname: string | null;

        @Column({ type: 'char', length: 8, nullable: true, collation: 'tis620_bin', charset: 'tis620' })
        @IsString()
        @IsOptional()
        update_dd: string | null;

        @Column({ type: 'char', length: 9, nullable: true, collation: 'tis620_bin', charset: 'tis620' })
        @IsString()
        @IsOptional()
        update_tt: string | null;
    }


export class PinkfromHeadReq {

    @IsOptional()
    pinkform?: Pinkform 
    
    @IsOptional()
    pinkHinv?: PinkHinv 
}
