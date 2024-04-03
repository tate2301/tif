import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiKeyService } from 'src/api-key/api-key.service';
import { CheckApiKeyOwnerGuard } from 'src/api-key/guards/apikey_owner.guard';
import { JwtAuthGuard } from 'src/auth/guard/jwt.guard';
import { RequestWithAuth } from 'src/common/types/user.type';
import { CreateAPIKeyInput } from 'src/api-key/input/create-apikey.input';
import { Public } from 'src/auth/decorators/public.decorator';
import { UsersService } from './service/user.service';

@UseGuards(JwtAuthGuard)
@Controller('merchant')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async get_merchant_profile(@Req() req: RequestWithAuth) {
    return req.user;
  }

  @Patch()
  async update_merchant_profile(@Req() req: RequestWithAuth) {}

  @Delete()
  async delete_merchant_profile(@Req() req: RequestWithAuth) {}

  @Public()
  @Get(':id')
  async get_merchant_by_id(@Param('id') id: string) {
    return this.userService.getUserByID(id);
  }
}

@UseGuards(JwtAuthGuard)
@Controller('merchant/api-keys')
export class APIKeysController {
  constructor(private readonly apiKeyService: ApiKeyService) {}

  @Post()
  async add_key(@Req() req, @Body() body: CreateAPIKeyInput) {
    return this.apiKeyService.addKey(req.user.id, body.name);
  }

  @Delete(':id')
  @UseGuards(CheckApiKeyOwnerGuard)
  async remove_key(@Param('id') apiKey: string) {
    return this.apiKeyService.removeKey(apiKey);
  }

  @Get()
  async get_keys(@Req() req: RequestWithAuth) {
    const user = req.user;
    const keys = await this.apiKeyService.getKeys(user.id);

    return keys;
  }

  @Get(':id')
  @UseGuards(CheckApiKeyOwnerGuard)
  async get_individual_key(@Param('id') id: string) {
    return this.apiKeyService.getIndividualKey(id);
  }
}
