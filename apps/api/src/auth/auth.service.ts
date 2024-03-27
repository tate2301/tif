import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import logger from 'src/common/logger';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: any) {
    // The payload contains the JWT claims. You can perform additional validation or
    // load additional user information as needed.
    return { userId: payload.sub, username: payload.username };
  }

  async validateApiKey(payload: any) {
    logger.info(payload);
  }
}
