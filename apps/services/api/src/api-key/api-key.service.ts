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

  /**
   * Generates a random API key.
   * @param length The length of the key. Default is 64.
   * @returns The generated API key.
   */
  static generateKey(length: number = 64): string {
    return randomBytes(length).toString('hex');
  }

  /**
   * Generates a publishable API key.
   * @returns The generated publishable API key.
   */
  generatePublishableKey(): string {
    return generateUniqueId(12, 'pub_');
  }

  /**
   * Generates a secret API key.
   * @returns The generated secret API key.
   */
  generateSecretKey(): string {
    return generateUniqueId(28, 'sec_');
  }

  /**
   * Adds a new API key.
   * @param user_id The ID of the user associated with the API key.
   * @param name The name of the API key. Default is 'Default'.
   * @returns The newly created API key.
   */
  async addKey(user_id: string, name: string = 'Default'): Promise<ApiKey> {
    const apiKey = await this.apiKeyRepository.save({
      id: this.generatePublishableKey(),
      secret: this.generateSecretKey(),
      user_id,
      name,
      is_test: true,
      environment: 'sandbox',
      created_at: new Date().getTime() / 1000,
      updated_at: new Date().getTime() / 1000,
      deleted_at: null,
    } as ApiKey);

    return apiKey;
  }

  /**
   * Removes an API key.
   * @param id The ID of the API key to remove.
   */
  async removeKey(id: string) {
    await this.apiKeyRepository.delete({ id });
  }

  /**
   * Retrieves an API key by ID.
   * @param id The ID of the API key to retrieve.
   * @returns The retrieved API key.
   */
  async getKey(id: string): Promise<ApiKey> {
    return this.apiKeyRepository.findOne({ where: { id } });
  }

  /**
   * Retrieves an API key by secret.
   * @param secret The secret of the API key to retrieve.
   * @returns The retrieved API key.
   */
  async getApiKeyBySecret(secret: string): Promise<ApiKey> {
    return this.apiKeyRepository.findOne({ where: { secret } });
  }

  /**
   * Retrieves all API keys associated with a user.
   * @param user_id The ID of the user.
   * @returns An array of API keys.
   */
  async getKeys(user_id: string): Promise<ApiKey[]> {
    return this.apiKeyRepository.find({ where: { user_id } });
  }

  /**
   * Retrieves an individual API key by ID.
   * @param id The ID of the API key to retrieve.
   * @returns The retrieved API key.
   */
  async getIndividualKey(id: string) {
    return this.apiKeyRepository.findOne({ where: { id } });
  }

  /**
   * Retrieves an API key by merchant ID.
   * @param merchant_id The merchant ID associated with the API key.
   * @returns The retrieved API key.
   */
  async getApiKeyByMerchantId(merchant_id: string): Promise<ApiKey> {
    return this.apiKeyRepository.findOne({ where: { user_id: merchant_id } });
  }

  /**
   * Validates a secret API key.
   * @param apiKey The secret API key to validate.
   * @returns The validated API key.
   */
  async validateSecretKey(apiKey: string): Promise<ApiKey> {
    return this.apiKeyRepository.findOne({ where: { secret: apiKey } });
  }
}
