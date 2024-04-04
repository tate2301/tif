import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ApiKey } from './models/api_key.entity';
import { randomBytes } from 'crypto';
import { InjectRepository } from '@nestjs/typeorm';
import { generateUniqueId } from 'src/common/utils';

@Injectable()
export class ApiKeyService {
  constructor(
    @InjectRepository(ApiKey)
    private readonly apiKeyRepository: Repository<ApiKey>,
  ) {}

  static generateKey(length: number = 64): string {
    return randomBytes(length).toString('hex');
  }

  generatePublishableKey(): string {
    return generateUniqueId(12, 'pub_');
  }

  generateSecretKey(): string {
    return generateUniqueId(28, 'sec_');
  }

  async addKey(user_id: string, name: string = 'Default'): Promise<ApiKey> {
    const apiKey = await this.apiKeyRepository.save({
      id: this.generatePublishableKey(),
      secret: this.generateSecretKey(),
      user_id,
      name,
      is_test: true,
      environment: 'sandbox',
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null,
    } as ApiKey);

    return apiKey;
  }

  async removeKey(id: string) {}

  async getKey(id: string): Promise<ApiKey> {
    return this.apiKeyRepository.findOne({ where: { id } });
  }

  async getKeys(user_id: string): Promise<ApiKey[]> {
    return this.apiKeyRepository.find({ where: { user_id } });
  }

  async getIndividualKey(id: string) {
    return this.apiKeyRepository.findOne({ where: { id } });
  }

  async getApiKeyByMerchantId(merchant_id: string): Promise<ApiKey> {
    return this.apiKeyRepository.findOne({ where: { user_id: merchant_id } });
  }

  async validateKey(apiKey: string): Promise<ApiKey> {
    return this.apiKeyRepository.findOne({ where: { secret: apiKey } });
  }
}
