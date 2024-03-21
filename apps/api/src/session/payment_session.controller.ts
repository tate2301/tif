import { Controller, Get, Post, Render } from '@nestjs/common';

@Controller('pay')
export class SessionController {
  @Post()
  async create_session() {}

  @Get()
  @Render('pay')
  root() {
    return { message: 'Hey there' };
  }
}
