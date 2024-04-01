import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DUser } from '../models/user.entity';
import { Repository } from 'typeorm';
import { RegisterUserInput } from 'src/auth/dto/register.input';
import { generatePrimaryKey } from 'src/common/utils';
import logger from 'src/common/logger';
import { randomUUID } from 'crypto';


@Injectable()
export class UsersService {
  constructor(@InjectRepository(DUser) private userRepository: Repository<DUser>) {
  }

  async findOne(email: string): Promise<DUser | undefined> {
    return this.userRepository.findOne({ where: {
      email
    } });
  }

  async create(user: RegisterUserInput): Promise<DUser> {
    if(await this.userRepository.findOne({where: {email: user.email}})) {
      throw new ConflictException()
    }
    const uuid = randomUUID()
    const newUser = await this.userRepository.save({...user, uuid}).then()
    logger.info(`Created user with email: ${user.email}`)
    return newUser

  }
}
