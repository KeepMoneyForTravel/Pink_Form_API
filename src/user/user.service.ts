import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { AuthDetail, UsernamePink, UsrGrantPink } from 'src/entity/user/usernamepink.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UsernamePink)
    private userRepository: Repository<UsernamePink>,
  ) {}

  async findOne(username: string): Promise<UsernamePink | null> {
    return this.userRepository.findOne({ where: { username } });
  }

  async validatePassword(password: string, storedPasswordHash: string): Promise<boolean> {
    return bcrypt.compare(password, storedPasswordHash);
  }

  async findByUsername(username: string, password: string): Promise<UsernamePink | null> {
    const query = `SELECT * FROM usernamepink WHERE username = '${username}' and usrpasswrd3 = '${password}'`;
    const users = await this.userRepository.query(query);
    return users.length > 0 ? users[0] : null;
  }

  async findgrp(username: string): Promise<AuthDetail[]> {
    const query = `
    SELECT 
    ug.usr_name, 
    ug.comcode, 
    cp.ename, 
    cp.refid,
    cp.taxid,
    cp.gateway,
    cp.org
    FROM 
    tulip_pinkform._usrgrantpink ug
    JOIN 
    tulip_pinkform._companypink cp ON ug.comcode = cp.comcode
    WHERE 
    ug.usr_name = '${username}' 
    AND ug.isright = 'T';
    `;
    const grp = await this.userRepository.query(query);
    return grp
  }

}
