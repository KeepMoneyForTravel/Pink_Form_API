import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MasterfilePermissionsSend } from 'src/entity/user/ugpermissions.entity';
import { UsrSend } from 'src/entity/user/usrsend.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UgsendService {
    constructor(
            @InjectRepository(UsrSend)
            private usrsendRepository: Repository<UsrSend>
        ) { }
        async getAllPermissionsSendByUserGroup(userGroupCode: string) {
            const permissions = await this.usrsendRepository.find({
                where: {
                    userGroupCode
                },
            });
            return permissions;
        }
        async upsertPermissionsSend(data: MasterfilePermissionsSend): Promise<void> {
            const records = [data];
            console.log(records);
            let a = await this.usrsendRepository.upsert(records, ['userGroupCode']);
            
        }
}
