import {
  CanActivate,
  ExecutionContext,
  Injectable,
  ForbiddenException,
} from '@nestjs/common';
import { ApiKeyService } from 'src/api-key/api-key.service';

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
      throw new ForbiddenException('You are not the owner of this API key');
    }

    return true;
  }
}
