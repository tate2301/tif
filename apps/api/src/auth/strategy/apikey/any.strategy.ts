// any-api-key.strategy.ts

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { HeaderAPIKeyStrategy } from 'passport-headerapikey';
import { APIKeyAuthService } from 'src/auth/auth.service';

@Injectable()
export class AnyApiKeyStrategy extends HeaderAPIKeyStrategy {
  constructor(private authService: APIKeyAuthService) {
    super(
      { header: 'x-api-key', prefix: 'Bearer ' },
      true,
      async (apiKey, done) => {
        const user = await this.authService.implicitValidateKey(apiKey);
        if (user) {
          done(null, user);
        }

        done(new UnauthorizedException(), null);
      },
    );
  }
}
