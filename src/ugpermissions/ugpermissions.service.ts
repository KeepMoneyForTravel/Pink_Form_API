import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UgPermissions } from 'src/entity/user/ugpermissions.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UgpermissionsService {
    constructor(
        @InjectRepository(UgPermissions)
        private ugpermissionsRepository: Repository<UgPermissions>,
    ) { }
    async GetUgPermissions(): Promise<UgPermissions[] | []> {
        return await this.ugpermissionsRepository.find();
    }

    async getUgPermissionsByOne(obj: UgPermissions): Promise<UgPermissions> {
        try {
            const ugPermissionscode = obj.user_group_code
            const foundUgPermissions = await this.ugpermissionsRepository.findOne({
                where: {
                    user_group_code: ugPermissionscode
                },
            });
            console.log(foundUgPermissions);
            if (!foundUgPermissions) {
                return null
            }
            return foundUgPermissions;
        } catch (error) {
            console.error('Error fetching ugPermissions:', error);
            throw new Error(error.message);
        }
    }
    async UpdateUgPermissions(obj: UgPermissions, objold: UgPermissions): Promise<UgPermissions> {
        Object.keys(obj).forEach((key) => {
            if (obj[key] !== null && obj[key] !== undefined) {
                (objold as any)[key] = obj[key];
            }
        });
        return await this.ugpermissionsRepository.save(objold);
    }
    async insertUgPermissions(obj: UgPermissions): Promise<UgPermissions> {
        try {
            const newUgPermissions = this.ugpermissionsRepository.create(obj);
            return await this.ugpermissionsRepository.save(newUgPermissions);
        } catch (error) {
            throw new Error('Error inserting new ugPermissions: ' + error.message);
        }
    }
    async deleteugPermissions(id: number): Promise<boolean> {
        const result = await this.ugpermissionsRepository.delete({ id });
        if (result.affected === 0) {
            throw new NotFoundException(`not found`);
        }
        return true;
    }
}
