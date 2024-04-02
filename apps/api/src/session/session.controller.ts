import {  Body, Controller, Delete, Get, Param, Patch, Post, Render, Request, UseGuards } from '@nestjs/common';
import { ApiKeyGuard } from 'src/auth/guard/apikey-auth.guard';
import { SessionService } from './session.service';
import { CreateSessionInput } from './dto/create_session.input';

@UseGuards(ApiKeyGuard)
@Controller('payment_session')
export class SessionController {
  constructor(private sessionService: SessionService) {}

  @Get(':session_id')
  async get_session(@Param('session_id') session_id: string) {
    
  }
  
  @Post()
  async create_session(@Request() req: any, @Body() body: CreateSessionInput ) {
    const user = req.user
    return this.sessionService.createPaymentSession(user, body)
  }

  @Patch()
  async update_session() {

  }

  @Delete()
  async revoke_session() {
    
  }

  @Get()
  @Render('pay')
  root() {
    return { message: 'Hey there' };
  }
}

