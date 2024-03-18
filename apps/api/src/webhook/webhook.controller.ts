import { Controller, Get } from '@nestjs/common';

@Controller('webhook')
export class WebhookController {
  @Get()
  async hello() {
    return 'Hello there';
  }
}
