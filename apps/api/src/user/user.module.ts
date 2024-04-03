import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DMerchant } from './models/merchant.entity';
import { Merchant } from './models/user.entity';
import { MerchantService } from './service/merchant.service';
import { UsersService } from './service/user.service';
import { APIKeysController, UsersController } from './user.controller';
import { APIKeyModule } from 'src/api-key/api-key.module';
import { ApiKeyService } from 'src/api-key/api-key.service';
import { ApiKey } from 'src/api-key/models/api_key.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DMerchant, Merchant, ApiKey])],
  providers: [MerchantService, UsersService, ApiKeyService],
  controllers: [UsersController, APIKeysController],
  exports: [MerchantService, UsersService],
})
export class UsersModule {}
