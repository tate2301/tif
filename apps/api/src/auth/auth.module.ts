import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { DCollectingAddressEntity } from 'src/payment/models/index.entity';
import { UsersService, APIKeyAuthService, AuthService } from './auth.service';
import { ApiKeyStrategy } from './strategy/apikey.strategy';
import { LocalStrategy } from './strategy/local.strategy';
import { JwtStrategy } from './strategy/jwt.strategy';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DUser } from './models/user.entity';
import { DBearer } from './models/bearer.entity';
import { DMerchant } from 'src/payment/models/merchant.entity';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET, // Use an environment variable for the secret
      signOptions: { expiresIn: '600m' }, // Optional: configure token expiration
    }),
    PassportModule,
    TypeOrmModule.forFeature([DUser, DBearer, DMerchant])
  ],
  providers: [AuthService, APIKeyAuthService, UsersService, ApiKeyStrategy, LocalStrategy, JwtStrategy],
  exports: [APIKeyAuthService, UsersService],
  controllers: [AuthController]
})
export class AuthModule {}
