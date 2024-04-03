import { Module } from '@nestjs/common';
import { ApiKeyService } from './api-key.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiKey } from './models/api_key.entity';
import { DUser } from 'src/user/models/user.entity';
import { UsersModule } from 'src/user/user.module';
import { CheckApiKeyOwnerGuard } from './guards/apikey_owner.guard';

@Module({
  imports: [UsersModule, TypeOrmModule.forFeature([ApiKey, DUser])],
  providers: [ApiKeyService, CheckApiKeyOwnerGuard],
  exports: [ApiKeyService],
})
export class APIKeyModule {}
