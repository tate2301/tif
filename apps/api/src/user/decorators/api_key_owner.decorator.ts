import {
  createParamDecorator,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { RequestWithAuth } from 'src/common/types/user.type';

export const CheckApiKeyOwner = createParamDecorator(
  async (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<RequestWithAuth>();
    const apiKeyService = ctx.switchToHttp().getRequest().apiKeyService;
    const apiKeyId = request.params.apiKeyId;
    const userId = request.user.id;

    const apiKey = await apiKeyService.findOne(apiKeyId);

    if (apiKey.user_id !== userId) {
      throw new ForbiddenException('You are not the owner of this API key');
    }

    return request.user;
  },
);
