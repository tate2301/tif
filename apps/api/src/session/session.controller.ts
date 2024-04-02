import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Render,
  Request,
  UseGuards,
} from '@nestjs/common';
import { SessionService } from './session.service';
import { CreateSessionInput } from './dto/create_session.input';
import { ApiKeyGuard } from 'src/auth/guard/apikey-auth.guard';

@UseGuards(ApiKeyGuard)
@Controller('payment_session')
export class SessionController {
  constructor(private sessionService: SessionService) {}

  @Get(':session_id')
  async get_session(@Param('session_id') session_id: string) {
    return { message: 'Hey there' };
  }

  @Post()
  async create_session(@Request() req: any, @Body() body: CreateSessionInput) {
    const user = req.user;
    return this.sessionService.createPaymentSession(user, body);
  }

  @Patch()
  async update_session() {}

  @Delete()
  async revoke_session() {}

  @Get()
  @Render('pay')
  root() {
    return { message: 'Hey there' };
  }
}
