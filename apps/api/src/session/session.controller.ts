import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Render,
  Req,
  Request,
  UseGuards,
} from '@nestjs/common';
import { SessionService } from './session.service';
import { CreateSessionInput } from './dto/create_session.input';
import { ApiKeyGuard } from 'src/auth/guard/apikey-auth.guard';
import { JwtAuthGuard } from 'src/auth/guard/jwt.guard';
import { RequestWithAuth } from 'src/common/types/user.type';

@Controller('payment_session')
export class SessionController {
  constructor(private sessionService: SessionService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async get_all_sessions(@Req() req: RequestWithAuth) {
    return { message: 'Hey there' };
  }

  @Get(':session_id')
  async get_session(@Param('session_id') session_id: string) {
    return { message: 'Hey there' };
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create_session(@Request() req: any, @Body() body: CreateSessionInput) {
    const user = req.user;
    return this.sessionService.createPaymentSession(user, body);
  }

  @UseGuards(ApiKeyGuard)
  @Patch(':id')
  async update_session() {}

  @UseGuards(ApiKeyGuard)
  @Delete(':id')
  async revoke_session() {}

  @Get()
  @Render('pay')
  root() {
    return { message: 'Hey there' };
  }
}
