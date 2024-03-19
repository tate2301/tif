import { Controller, Get, Render } from '@nestjs/common';

@Controller('pay')
export class PayController {
  @Get()
  @Render('pay')
  root() {
    return { message: 'Hey there' };
  }
}
