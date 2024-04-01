import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { DCollectingAddressEntity } from 'src/payment/models/index.entity';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET, // Use an environment variable for the secret
      signOptions: { expiresIn: '60s' }, // Optional: configure token expiration
    }),
    DCollectingAddressEntity,
  ],
})
export class AuthModule {}
