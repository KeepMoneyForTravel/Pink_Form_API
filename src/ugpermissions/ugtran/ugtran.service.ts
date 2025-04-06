import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MasterfilePermissionsTran } from 'src/entity/user/ugpermissions.entity';
import { UsrTran } from 'src/entity/user/usrtran.entity';
import { In, Repository } from 'typeorm';

@Injectable()
export class UgtranService {
    constructor(
        @InjectRepository(UsrTran)
        private usrtranRepository: Repository<UsrTran>
    ) { }
    async getAllPermissionsTranByUserGroup(userGroupCode: string) {
        const rows = [
            'job', 'invH', 'invD'
        ];
        const permissions = await this.usrtranRepository.find({
            where: {
                userGroupCode,
                rowdec: In(rows),
            },
        });
        const result = rows.reduce((acc, row) => {
            const perm = permissions.find(p => p.rowdec === row);
            acc[row] = perm || {
                id: 0,
                userGroupCode: userGroupCode,
                rowdec: row,
                show: '0',
                add: '0',
                edit: '0',
                delete: '0',
                copy: '0',
                close: '0',
                unclose: '0',
                previewDd: '0',
                viewXML: '0',
                viewresponse: '0',
                changeInv: '0',
                Recalculate: '0',
                report: '0',
                export: '0',
            };
            return acc;
        }, {});

        return result;
    }
    async upsertPermissionsTran(data: MasterfilePermissionsTran): Promise<void> {
        const records = Object.values(data);
        let a = await this.usrtranRepository.upsert(records, ['userGroupCode', 'rowdec']);
        console.log('a', a);
    }
}
