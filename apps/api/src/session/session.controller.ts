import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  Request,
  UseGuards,
} from '@nestjs/common';
import { RevokeReason, SessionService } from './session.service';
import { CreateSessionInput } from './dto/create_session.input';
import { RequestWithApiKey, RequestWithAuth } from 'src/common/types/user.type';
import { Public } from 'src/auth/decorators/public.decorator';
import { PaymentSession } from './models/payment_session.entity';
import { PatchSessionInput } from './dto/patch_session.input';
import { SecretKeyGuard } from 'src/auth/guard/api-key/secret.guard';
import { AnyApiKeyGuard } from 'src/auth/guard/api-key/any.guard';

@Controller('payment_session')
export class SessionController {
  constructor(private sessionService: SessionService) {}

  /**
   * Get all payment sessions for a merchant by api key
   * @param req RequestWithAuth
   * @returns PaymentSession[]
   */
  @UseGuards(AnyApiKeyGuard)
  @Get()
  async get_all_sessions(
    @Req() req: RequestWithAuth,
  ): Promise<PaymentSession[]> {
    const { user } = req;

    return this.sessionService.getPaymentSessionsByMerchantId(user.id);
  }

  /**
   *  Get a payment session by session id
   * @param session_id
   * @returns PaymentSession
   */
  @Public()
  @Get(':session_id')
  async get_session(@Param('session_id') session_id: string): Promise<
    | (PaymentSession & {
        products: { product: string; quantity: number }[];
      })
    | any
  > {
    return this.sessionService.getPaymentSession(session_id);
  }

  @UseGuards(SecretKeyGuard)
  @Post()
  async create_session(
    @Request() req: RequestWithApiKey,
    @Body() body: CreateSessionInput,
  ): Promise<{ session_id: string; checkout_url: string }> {
    const user = req.user;
    return this.sessionService.createPaymentSession(user, body);
  }

  @UseGuards(SecretKeyGuard)
  @Patch(':id')
  async update_session(
    @Req() req: RequestWithApiKey,
    @Param('id') id: string,
    @Body() body: PatchSessionInput,
  ) {
    const user = req.user;
    return this.sessionService.updatePaymentSession(user, id, body);
  }

  @UseGuards(SecretKeyGuard)
  @Delete(':id')
  async revoke_session(
    @Req() req: RequestWithAuth,
    @Param('id') id: string,
    @Body('reason') reason: RevokeReason,
  ): Promise<PaymentSession> {
    const { user } = req;
    return this.sessionService.revokePaymentSession(user.id, id, reason);
  }
}
