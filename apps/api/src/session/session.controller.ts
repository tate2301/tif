import {  Body, Controller, Get, Post, Render, Request, UseGuards } from '@nestjs/common';
import { ApiKeyGuard } from 'src/auth/guard/apikey-auth.guard';
import { SessionService } from './session.service';
import { CreateSessionInput } from './dto/create_session.input';

@UseGuards(ApiKeyGuard)
@Controller('pay')
export class SessionController {
  constructor(private sessionService: SessionService) {}
  
  @Post()
  async create_session(@Request() req: any, @Body() body: CreateSessionInput ) {
    const user = req.user
    return this.sessionService.createPaymentSession(user, body)

  }

  @Get()
  @Render('pay')
  root() {
    return { message: 'Hey there' };
  }
}

