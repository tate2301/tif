import {
  CanActivate,
  ExecutionContext,
  Injectable,
  ForbiddenException,
} from '@nestjs/common';
import { ApiKeyService } from 'src/api-key/api-key.service';
import logger from 'src/common/logger';

@Injectable()
export class CheckApiKeyOwnerGuard implements CanActivate {
  constructor(private apiKeyService: ApiKeyService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const apiKeyId = request.params.id;
    const userId = request.user.id;

    const apiKey = await this.apiKeyService.getKey(apiKeyId);

    if (!apiKey) {
      throw new ForbiddenException('API key not found');
    }

    if (apiKey.user_id !== userId) {
      logger.error(
        `User ${userId} tried to access API key ${apiKeyId} which does not belong to them`,
      );
      throw new ForbiddenException('Invalid API key');
    }

    return true;
  }
}
