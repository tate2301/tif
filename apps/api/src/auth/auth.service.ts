import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { Merchant } from '../user/models/user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { RegisterUserInput } from './dto/register.input';
import { UsersService } from 'src/user/service/user.service';
import { REFRESH_TOKEN_AGE } from 'src/common/constants';
import { ApiKeyService } from 'src/api-key/api-key.service';
import { AuthenticatedMerchant } from './strategy/apikey.strategy';

@Injectable()
export class APIKeyAuthService {
  constructor(
    private apiKeyService: ApiKeyService,
    private merchantService: UsersService,
  ) {}

  async validateApiKey(apiKey: string): Promise<AuthenticatedMerchant> {
    const apiKeyDetails = await this.apiKeyService.validateKey(apiKey);

    if (apiKeyDetails) {
      const merchant =
        await this.merchantService.getUserByApiKey(apiKeyDetails);

      if (!merchant) {
        return null;
      }

      return {
        ...merchant,
        api_key: apiKeyDetails,
      };
    } else {
      return null;
    }
  }
}

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<Merchant> {
    const user = await this.usersService.findOne(email);

    if (user && bcrypt.compare(user.password, await bcrypt.hash(pass, 10))) {
      const { ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = {
      user: {
        id: user.id,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        created_at: user.created_at,
        updated_at: user.updated_at,
      },
    };

    return {
      access_token: await this.createAccessToken(payload),
      refresh_token: await this.createRefreshToken({
        email: payload.user.email,
      }),
    };
  }

  async register(data: RegisterUserInput) {
    data.password = await bcrypt.hash(data.password, 10);
    let response = await this.usersService.create(data);
    if (response) {
      const { ...result } = response;
      return result;
    }
  }

  async createAccessToken(payload: any) {
    return this.jwtService.sign(payload, { expiresIn: '15m' });
  }

  decodeToken(token): any {
    return this.jwtService.decode(token);
  }

  async createRefreshToken(payload: any) {
    return this.jwtService.sign(payload, { expiresIn: '7d' });
  }

  async refreshTokens(refreshToken: string) {
    try {
      // Decode the refresh token
      const payload = this.jwtService.verify(refreshToken);

      // Check if the user exists
      const user = await this.usersService.findOne(payload.email);
      if (!user) {
        throw new UnauthorizedException('User not found');
      }

      // Create a new access token
      const newTokens = await this.login(user);

      return newTokens;
    } catch (error) {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }

  async setRefreshTokenCookie(res, token) {
    res.cookie('refreshToken', token, {
      httpOnly: true,
      path: '/auth/refresh',
      maxAge: REFRESH_TOKEN_AGE,
    });
  }
}
