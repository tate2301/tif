import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const ApiKeyParam = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user.api_key;
  },
);
