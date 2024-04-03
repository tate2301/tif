import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DUser } from '../models/user.entity';
import { Repository } from 'typeorm';
import { RegisterUserInput } from 'src/auth/dto/register.input';
import { generatePrimaryKey } from 'src/common/utils';
import logger from 'src/common/logger';
import { randomUUID } from 'crypto';
import { ApiKeyService } from 'src/api-key/api-key.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(DUser) private userRepository: Repository<DUser>,
    private apiKeyService: ApiKeyService,
  ) {}

  async getUserById(id: string): Promise<DUser | undefined> {
    const user = await this.userRepository.findOneBy({ id });
    if (user) user.password = undefined;
    return { ...user };
  }

  async getUserByEmail(email: string): Promise<DUser | undefined> {
    return this.userRepository.findOneBy({ email });
  }

  async findOne(email: string): Promise<DUser | undefined> {
    return this.userRepository.findOne({
      where: {
        email,
      },
    });
  }

  async create(user: RegisterUserInput): Promise<DUser> {
    if (await this.userRepository.findOne({ where: { email: user.email } })) {
      throw new ConflictException();
    }
    const uuid = randomUUID();
    const newUser = await this.userRepository
      .save({ ...user, uuid, id: uuid })
      .then();
    logger.info(`Created user with email: ${user.email}`);
    return newUser;
  }

  async getUserByApiKey(apiKey: string): Promise<DUser | undefined> {
    const key = await this.apiKeyService.getKey(apiKey);
    if (!key) return undefined;
    return this.getUserById(key.user_id);
  }
}
