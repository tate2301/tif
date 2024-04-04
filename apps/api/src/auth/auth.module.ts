import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { APIKeyAuthService, AuthService } from './auth.service';
import { LocalStrategy } from './strategy/local.strategy';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Merchant } from '../user/models/user.entity';
import { Bearer as Bearer } from './models/bearer.entity';
import { UsersModule } from 'src/user/user.module';
import { JwtStrategy } from './strategy/jwt.strategy';
import { ApiKeyService } from 'src/api-key/api-key.service';
import { APIKeyModule } from 'src/api-key/api-key.module';
import { ApiKey } from 'src/api-key/models/api_key.entity';
import { UsersService } from 'src/user/service/user.service';
import { AnyApiKeyStrategy } from './strategy/apikey/any.strategy';
import { SecretKeyStrategy } from './strategy/apikey/secret.strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: 'supersecret',
      signOptions: { expiresIn: '600m' },
    }),
    TypeOrmModule.forFeature([Bearer, Merchant, ApiKey]),
    PassportModule,
    UsersModule,
    APIKeyModule,
  ],
  providers: [
    AuthService,
    UsersService,
    APIKeyAuthService,
    ApiKeyService,
    LocalStrategy,
    JwtStrategy,
    AnyApiKeyStrategy,
    SecretKeyStrategy,
  ],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
