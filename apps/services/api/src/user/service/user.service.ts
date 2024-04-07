import { ConflictException, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Merchant } from '../models/user.entity';
import { Repository } from 'typeorm';
import { RegisterUserInput } from 'src/auth/dto/register.input';
import { generateUniqueId } from 'src/common/utils';
import logger from 'src/common/logger';
import { randomUUID } from 'crypto';
import { ApiKeyService } from 'src/api-key/api-key.service';
import { ApiKey } from 'src/api-key/models/api_key.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Merchant) private userRepository: Repository<Merchant>,
    private apiKeyService: ApiKeyService,
  ) {}

  async getUserByID(id: string): Promise<Merchant | undefined> {
    const user = await this.userRepository.findOneBy({ id });
    if (user) user.password = undefined;
    return { ...user };
  }

  async getUserByEmail(email: string): Promise<Merchant | undefined> {
    return this.userRepository.findOneBy({ email });
  }

  async findOne(email: string): Promise<Merchant | undefined> {
    return this.userRepository.findOne({
      where: {
        email,
      },
    });
  }

  async create(user: RegisterUserInput): Promise<Merchant> {
    if (await this.userRepository.findOne({ where: { email: user.email } })) {
      throw new ConflictException();
    }
    const uuid = randomUUID();
    const newUser = await this.userRepository
      .save({
        ...user,
        uuid,
        id: generateUniqueId(16, 'merchant_'),
        is_active: true,
      })
      .then();
    logger.info(`Created user with email: ${user.email}`);
    return newUser;
  }

  async getUserByApiKey(apiKey: ApiKey): Promise<Merchant | undefined> {
    return this.getUserByID(apiKey.user_id);
  }
}
