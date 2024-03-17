import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET, // Use an environment variable for the secret
      signOptions: { expiresIn: '60s' }, // Optional: configure token expiration
    }),
  ],
})
export class AuthModule {}
