// secret-key.strategy.ts

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { HeaderAPIKeyStrategy } from 'passport-headerapikey';
import { APIKeyAuthService } from 'src/auth/auth.service';

@Injectable()
export class SecretKeyStrategy extends HeaderAPIKeyStrategy {
  constructor(private authService: APIKeyAuthService) {
    super(
      { header: 'x-api-key', prefix: 'Bearer ' },
      true,
      async (apiKey, done) => {
        if (this.authService.whatKeyTypeIsThis(apiKey) !== 'private') {
          return done(
            new UnauthorizedException(
              'A secret key is required for this operation',
            ),
            false,
          );
        }

        const user = await this.authService.validateSecretKey(apiKey);
        if (user) {
          done(null, user);
        }

        done(new UnauthorizedException(), null);
      },
    );
  }
}
