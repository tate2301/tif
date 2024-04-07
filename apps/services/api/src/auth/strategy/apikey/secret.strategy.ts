// secret-key.strategy.ts

import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { HeaderAPIKeyStrategy } from 'passport-headerapikey';
import { APIKeyAuthService } from 'src/auth/auth.service';
import { PassportStrategy } from '@nestjs/passport';

@Injectable()
export class SecretKeyStrategy extends PassportStrategy(
  HeaderAPIKeyStrategy,
  'secret_headerapikey',
) {
  constructor(private authService: APIKeyAuthService) {
    super(
      { header: 'x-api-key', prefix: 'Bearer ' },
      true,
      async (apiKey, done) => {
        try {
          if (this.authService.whatKeyTypeIsThis(apiKey) !== 'private') {
            throw new UnauthorizedException(
              'A secret key is required for this operation',
            );
          }

          const user = await this.authService.validateSecretKey(apiKey);

          if (!user) {
            throw new UnauthorizedException();
          }

          return done(null, user);
        } catch (error) {
          return done(new UnauthorizedException(), null);
        }
      },
    );
  }
}
