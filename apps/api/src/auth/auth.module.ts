import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { DCollectingAddressEntity } from 'src/payment/models/index.entity';
import { UsersService, JWTAuthService } from './auth.service';
import { ApiKeyStrategy } from './strategy/apikey.strategy';
import { LocalStrategy } from './strategy/local.strategy';
import { JwtStrategy } from './strategy/jwt.strategy';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    JwtModule.register({
      
      secret: process.env.JWT_SECRET, // Use an environment variable for the secret
      signOptions: { expiresIn: '60s' }, // Optional: configure token expiration
    }),
    PassportModule,

  ],
  providers: [JWTAuthService, UsersService, ApiKeyStrategy, LocalStrategy, JwtStrategy],
  exports: [JWTAuthService, UsersService],
  controllers: [AuthController]
})
export class AuthModule {}
