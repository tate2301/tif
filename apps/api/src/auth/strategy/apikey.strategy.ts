import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { HeaderAPIKeyStrategy } from 'passport-headerapikey';
import { APIKeyAuthService } from '../auth.service';
import { Merchant } from 'src/user/models/user.entity';
import { ApiKey } from 'src/api-key/models/api_key.entity';

export type AuthenticatedMerchant = Merchant & {
  api_key: ApiKey;
  is_impersonating?: boolean;
};

@Injectable()
export class ApiKeyStrategy extends PassportStrategy(
  HeaderAPIKeyStrategy,
  'headerapikey',
) {
  constructor(private authService: APIKeyAuthService) {
    super(
      { header: 'x-api-key', prefix: 'Bearer ' },
      true,
      async (apiKey, done) => {
        const user = await this.authService.validateSecretKey(apiKey);
        if (user) {
          done(null, user);
        }

        done(new UnauthorizedException(), null);
      },
    );
  }
}
