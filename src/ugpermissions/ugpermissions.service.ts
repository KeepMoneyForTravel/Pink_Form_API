import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MasterfilePermissions, reqhead, UsernameComcode, UsernamePink, Usrg } from 'src/entity/user/ugpermissions.entity';
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
            `, [userGroupCode]
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

    async getAllPermissionsCompany(comcode: string): Promise<any> {
        try {
            const grp = await this.ugpermissionsRepository.query(
                `
                SELECT 
                    cp.comcode, 
                    cp.ename,
                    CASE 
                WHEN up.usr_name IS NOT NULL THEN '1' ELSE '0'
                END AS match_flag
                FROM _companypink cp
                LEFT JOIN _usrgrantpink up 
                    ON cp.comcode = up.comcode 
                    AND up.usr_name = '${comcode}' 
                    AND up.isright = 'T';
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
    async getheadCompany(comcode: string): Promise<any> {
        try {
            const grp = await this.ugpermissionsRepository.query(
                `
                SELECT * from usernamepink where username = '${comcode}'
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

    async getusernamepink(): Promise<any> {
        try {
            const grp = await this.ugpermissionsRepository.query(
                `
                SELECT * from usernamepink
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

    async upsertUserPink(user: UsernamePink): Promise<void> {
        const { username } = user;

        const exists = await this.ugpermissionsRepository.query(
            `SELECT COUNT(*) AS count FROM usernamepink WHERE username = ?`,
            [username]
        );
        const count = parseInt(exists[0]?.count || '0');
        if (count > 0) {
            // UPDATE
            await this.ugpermissionsRepository.query(
                `UPDATE usernamepink SET
              usrpasswrd = ?, usrpasswrd2 = ?, grpcode = ?, meiosysuser = ?, meiosyspassword = ?,
              certserialno = ?, certserialno2013 = ?, syscfgcode = ?, strucver = ?, fldchk = ?,
              progver = ?, usrname = ?, update_dd = ?, update_tt = ?, usrpasswrd3 = ?
            WHERE username = ?`,
                [
                    user.usrpasswrd, user.usrpasswrd2, user.grpcode, user.meiosysuser, user.meiosyspassword,
                    user.certserialno, user.certserialno2013, user.syscfgcode, user.strucver, user.fldchk,
                    user.progver, user.usrname, user.update_dd, user.update_tt, user.usrpasswrd3,
                    user.username
                ]
            );
        } else {
            // INSERT
            console.log('cc');
            await this.ugpermissionsRepository.query(
                `INSERT INTO usernamepink (
              username, usrpasswrd, usrpasswrd2, grpcode, meiosysuser, meiosyspassword,
              certserialno, certserialno2013, syscfgcode, strucver, fldchk, progver,
              usrname, update_dd, update_tt, usrpasswrd3
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [
                    user.username, user.usrpasswrd, user.usrpasswrd2, user.grpcode, user.meiosysuser, user.meiosyspassword,
                    user.certserialno, user.certserialno2013, user.syscfgcode, user.strucver, user.fldchk, user.progver,
                    user.usrname, user.update_dd, user.update_tt, user.usrpasswrd3
                ]
            );

        }
    }

    async upsertUgpermissionsCompany(user: UsernameComcode[]): Promise<void> {
        console.log(user);
        for (let index of user) {
            const { username, match_flag, comcode } = index;
            // ตรวจสอบว่า (username, comcode) มีอยู่ในตาราง `_usrgrantpink` หรือไม่
            const exists = await this.ugpermissionsRepository.query(
              `SELECT COUNT(*) AS count FROM _usrgrantpink WHERE usr_name = ? AND comcode = ?`,
              [username, comcode]
            );
            const count = parseInt(exists[0]?.count || 0);
            console.log(count);
            if (count > 0) {
              // ถ้ามีข้อมูลอยู่แล้ว จะอัปเดตเป็น 'F'
              await this.ugpermissionsRepository.query(
                `UPDATE _usrgrantpink SET isright = ? WHERE usr_name = ? AND comcode = ?`,
                [match_flag ,username , comcode]
              );
            } else {
              // ถ้าไม่มีข้อมูล จะเช็คว่าเคยมีสถานะ 'F' อยู่แล้วหรือไม่
              const existsInactive = await this.ugpermissionsRepository.query(
                `SELECT COUNT(*) AS count FROM _usrgrantpink WHERE usr_name = ? AND comcode = ? AND isright = 'F'`,
                [username, comcode]
              );
              const inactiveCount = parseInt(existsInactive[0]?.count || '0');
              if (inactiveCount > 0) {
                // ถ้ามีข้อมูลที่ `isright = 'F'` อยู่แล้ว ให้เปลี่ยนสถานะเป็น 'T'
                await this.ugpermissionsRepository.query(
                  `UPDATE _usrgrantpink SET isright = 'T' WHERE usr_name = ? AND comcode = ?`,
                  [username, comcode]
                );
              } else {
                // ถ้าไม่มีข้อมูล, ก็ insert ข้อมูลใหม่ด้วย `isright = 'T'`
                await this.ugpermissionsRepository.query(
                  `INSERT INTO _usrgrantpink (usr_name, comcode, isright,datayear) VALUES (?, ?, ? ,'')`,
                  [username, comcode ,match_flag]
                );
              }
            }
          }
          
    }
    async deleteUgpermissionsCompany(usr: string): Promise<void> {
        await this.ugpermissionsRepository.query(
            `DELETE FROM _usrgrantpink WHERE username = ?`,
            [usr]
        );

        await this.ugpermissionsRepository.query(
            `DELETE FROM usernamepink Where usr_name = ?`,
            [usr]
        );
    }
}
