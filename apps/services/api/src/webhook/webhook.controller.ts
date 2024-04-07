import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';

@Controller('webhook')
export class WebhookController {
  @Get()
  async get_webhook() {
    return 'Hello there';
  }

  @Post()
  async create_webhook() {}

  @Patch()
  async patch_webhook() {}

  @Delete()
  async remove_webhook() {}
}
