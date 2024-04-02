import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import {  APIKeyAuthService, AuthService } from './auth.service';
import { LocalStrategy } from './strategy/local.strategy';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DUser } from '../user/models/user.entity';
import { DBearer } from './models/bearer.entity';
import { DMerchant } from 'src/user/models/merchant.entity';
import { UsersModule } from 'src/user/user.module';
import { JwtStrategy } from './strategy/jwt.strategy';
import { ApiKeyStrategy } from './strategy/apikey.strategy';
import { jwtConstants } from 'src/common/constants';

@Module({
  imports: [
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '600m' }, 
    }),
    TypeOrmModule.forFeature([DBearer, DUser, DMerchant]),
    PassportModule,
    UsersModule
  ],
  providers: [AuthService, APIKeyAuthService,  LocalStrategy, JwtStrategy, ApiKeyStrategy ],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
