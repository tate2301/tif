import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { HeaderAPIKeyStrategy } from 'passport-headerapikey';
import { APIKeyAuthService } from '../auth.service';
import { UsersService } from 'src/user/service/user.service';

@Injectable()
export class ApiKeyStrategy extends PassportStrategy(
  HeaderAPIKeyStrategy,
  'headerapikey',
) {
  constructor(
    private authService: APIKeyAuthService,
    private merchantService: UsersService,
  ) {
    super(
      { header: 'x-api-key', prefix: 'Bearer ' },
      true,
      async (apiKey, done) => {
        if (this.authService.validateApiKey(apiKey)) {
          done(null, true);
        }

        done(new UnauthorizedException(), null);
      },
    );
  }

  async validate(apiKey: string) {
    const merchant = await this.merchantService.getUserByApiKey(apiKey);
    if (!merchant) {
      throw new UnauthorizedException();
    }

    return merchant;
  }
}
