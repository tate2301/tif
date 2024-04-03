import { Injectable, Logger } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ApiKeyService } from 'src/api-key/api-key.service';
import { jwtConstants } from 'src/common/constants';
import { UsersService } from 'src/user/service/user.service';
import { AuthenticatedMerchant } from './apikey.strategy';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private usersService: UsersService,
    private apiKeyService: ApiKeyService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any): Promise<AuthenticatedMerchant> {
    const user = await this.usersService.getUserByID(payload.user.id);
    const apiKey = await this.apiKeyService.getApiKeyByMerchantId(
      payload.user.id,
    );

    return {
      ...user,
      email: payload.email,
      first_name: payload.first_name,
      last_name: payload.last_name,
      created_at: payload.created_at,
      updated_at: payload.updated_at,
      api_key: apiKey,
      is_impersonating: true,
    };
  }
}
