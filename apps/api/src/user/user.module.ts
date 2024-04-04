import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Merchant } from './models/user.entity';
import { UsersService } from './service/user.service';
import { APIKeysController, UsersController } from './user.controller';
import { APIKeyModule } from 'src/api-key/api-key.module';
import { ApiKeyService } from 'src/api-key/api-key.service';
import { ApiKey } from 'src/api-key/models/api_key.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Merchant, ApiKey])],
  providers: [UsersService, ApiKeyService],
  controllers: [UsersController, APIKeysController],
  exports: [UsersService],
})
export class UsersModule {}
