import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterUserInput } from 'src/auth/dto/register.input';
import logger from 'src/common/logger';
import { randomUUID } from 'crypto';
import { DMerchant } from '../models/merchant.entity';


@Injectable()
export class MerchantService {
  constructor(@InjectRepository(DMerchant) private merchantRepository: Repository<DMerchant>) {
  }

  async findOne(email: string): Promise<DMerchant | undefined> {
    return this.merchantRepository.findOne({ where: {
      email
    } });
  }

  async create(user: RegisterUserInput): Promise<DMerchant> {
    if(await this.merchantRepository.findOne({where: {email: user.email}})) {
      throw new ConflictException()
    }
    const uuid = randomUUID()
    const newUser = await this.merchantRepository.save({...user, uuid}).then()
    logger.info(`Created user with email: ${user.email}`)
    return newUser

  }
}
