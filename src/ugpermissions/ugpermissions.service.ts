import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MasterfilePermissions, Usrg } from 'src/entity/user/ugpermissions.entity';
import { In, Repository } from 'typeorm';

@Injectable()
export class UgpermissionsService {
    constructor(
        @InjectRepository(Usrg)
        private ugpermissionsRepository: Repository<Usrg>
    ) { }
    async getAllPermissionsByUserGroup(userGroupCode: string) {
        const rows = [
            'exporter', 'consignee', 'autho', 'productpink', 'bank',
            'accno', 'announce', 'country', 'province', 'subprovince',
            'district', 'port', 'unitpack', 'currency', 'tariff',
            'statcode', 'unitqty' , 'usrname' , 'usergroup'
        ];
        const permissions = await this.ugpermissionsRepository.find({
            where: {
                userGroupCode,
                rowdec: In(rows),
            },
        });
        const result = rows.reduce((acc, row) => {
            const perm = permissions.find(p => p.rowdec === row);
            acc[row] = perm || {id : 0 , userGroupCode : userGroupCode ,rowdec: row, show: '0' ,add: '0', edit: '0', delete: '0',  copy: '0' , report: '0', export: '0'};
            return acc;
        }, {});

        return result;
    }

    async upsertPermissions(data: MasterfilePermissions): Promise<void> {
        const records = Object.values(data);
        await this.ugpermissionsRepository.upsert(records, ['userGroupCode', 'rowdec']);
      }

}
