import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { DCollectingAddressEntity } from 'src/payment/models/index.entity';
import {  APIKeyAuthService, AuthService } from './auth.service';
import { ApiKeyStrategy } from './strategy/apikey.strategy';
import { LocalStrategy } from './strategy/local.strategy';
import { JwtStrategy } from './strategy/jwt.strategy';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DUser } from '../user/models/user.entity';
import { DBearer } from './models/bearer.entity';
import { DMerchant } from 'src/user/models/merchant.entity';
import { UsersModule } from 'src/user/user.module';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '600m' }, 
    }),
    TypeOrmModule.forFeature([DBearer, DUser, DMerchant]),
    PassportModule,
    UsersModule
  ],
  providers: [AuthService, APIKeyAuthService, ApiKeyStrategy, LocalStrategy, JwtStrategy, ],
  controllers: [AuthController]
})
export class AuthModule {}
