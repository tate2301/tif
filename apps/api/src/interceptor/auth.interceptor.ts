import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { ApiKeyService } from 'src/api-key/api-key.service';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class AuthInterceptor implements NestInterceptor {
  constructor(
    private authService: AuthService,
    private apiKeyService: ApiKeyService,
  ) {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const req = context.switchToHttp().getRequest();
    let tokenArray = req.headers.authorization;

    if (tokenArray) {
      const token = await this.authService.decodeToken(
        tokenArray.split(' ')[1],
      );
      const user = token?.user;

      if (!user) {
        return next.handle().pipe();
      }

      const apiKey = await this.apiKeyService.getApiKeyByMerchantId(user.id);

      req.body['user'] = user;
      req.headers['x-api-key'] = `Bearer ${apiKey}`;
    }

    return next.handle().pipe();
  }
}
