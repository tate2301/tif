import { Injectable } from '@nestjs/common';

interface ApiKey {}

@Injectable()
export class ApiKeyService {
  async generateApiKeyForUser(username: string): Promise<ApiKey> {
    const user = {}; // await this.usersService.findByUsername(username);
    if (!user) {
      throw new Error('User not found');
    }
    return {};
    // return this.generateApiKey(user.id);
  }

  generateApiKey(val: string) {}
}
