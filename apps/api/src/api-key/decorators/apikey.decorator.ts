import { ExecutionContext, Inject, createParamDecorator } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { ApiKeyService } from '../api-key.service';

export const ApiKeyParam = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    // Assuming the user object attached by Passport contains the API key
    return request.user.apiKey;
  },
);
