import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MasterfilePermissions, reqhead, Usrg } from 'src/entity/user/ugpermissions.entity';
import { UsrSend } from 'src/entity/user/usrsend.entity';
import { UsrTran } from 'src/entity/user/usrtran.entity';
import { In, Repository } from 'typeorm';

@Injectable()
export class UgpermissionsService {
    constructor(
        @InjectRepository(Usrg)
        private ugpermissionsRepository: Repository<Usrg>,

        // @InjectRepository(UsrSend)
        // private usrsendRepository: Repository<UsrSend>,

        // @InjectRepository(UsrTran)
        // private usrtranRepository: Repository<UsrTran>,
    ) { }
    async getAllPermissionsByUserGroup(userGroupCode: string) {
        const rows = [
            'exporter', 'consignee', 'autho', 'productpink', 'bank',
            'accno', 'announce', 'country', 'province', 'subprovince',
            'district', 'port', 'unitpack', 'currency', 'tariff',
            'statcode', 'unitqty', 'usrname', 'usergroup'
        ];
        const permissions = await this.ugpermissionsRepository.find({
            where: {
                userGroupCode,
                rowdec: In(rows),
            },
        });
        const result = rows.reduce((acc, row) => {
            const perm = permissions.find(p => p.rowdec === row);
            acc[row] = perm || { id: 0, userGroupCode: userGroupCode, rowdec: row, show: '0', add: '0', edit: '0', delete: '0', copy: '0', report: '0', export: '0' };
            return acc;
        }, {});

        return result;
    }

    async insertgrp(obj: reqhead): Promise<any> {
        try {
            const res = await this.ugpermissionsRepository.query(
                `
                select grpcode from apitestd_pinkfrom.grpinfo where grpcode = ?
                `,
                [obj.grpcode]
            );
            if (res.length > 0) {
                await this.ugpermissionsRepository.query(
                    `
                    Update apitestd_pinkfrom.grpinfo set grpname = ?, grpdesc = ? where grpcode = ?
                    `,
                    [obj.grpcode, obj.grpname, obj.grpdesc]
                );
            } else {
                await this.ugpermissionsRepository.query(
                    `
                    INSERT INTO apitestd_pinkfrom.grpinfo (grpcode, grpname, grpdesc)
                    VALUES (?, ?, ?)
                    `,
                    [obj.grpcode, obj.grpname, obj.grpdesc]
                );
            }
            return true;
        } catch (error) {
            console.error('Error inserting group:', error);
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async upsertPermissions(data: MasterfilePermissions): Promise<void> {
        const records = Object.values(data);
        await this.ugpermissionsRepository.upsert(records, ['userGroupCode', 'rowdec']);
    }

    async deletePermissions(userGroupCode: string): Promise<void> {
        await this.ugpermissionsRepository.query(
            `DELETE FROM apitestd_pinkfrom.usrgpermission WHERE userGroupCode = ?`,
            [userGroupCode]
          );
          
          await this.ugpermissionsRepository.query(
            `DELETE FROM apitestd_pinkfrom.usr_send WHERE userGroupCode = ?`,
            [userGroupCode]
          );
          
          await this.ugpermissionsRepository.query(
            `DELETE FROM apitestd_pinkfrom.usr_tran WHERE userGroupCode = ?`,
            [userGroupCode]
          );
        const grp = await this.ugpermissionsRepository.query(
            `
             Update apitestd_pinkfrom.usernamepink set grpcode = '' where grpcode = ?
            `,[userGroupCode]
        );
    }
    async getAllGroupCode(): Promise<any> {
        try {
            const grp = await this.ugpermissionsRepository.query(
                `
                SELECT *
                FROM apitestd_pinkfrom.grpinfo;
                `
            );

            if (!grp || grp.length === 0) {
                return [];
            }

            return grp;

        } catch (error) {
            console.error('DB error:', error);
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
