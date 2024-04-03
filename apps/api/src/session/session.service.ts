import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentSession } from './models/payment_session.entity';
import { Repository } from 'typeorm';
import { generateUniqueId } from 'src/common/utils';
import { CreateSessionInput } from './dto/create_session.input';
import { DUser } from 'src/user/models/user.entity';
import { AuthenticatedMerchant } from 'src/auth/strategy/apikey.strategy';

export type RevokeReason = 'expired' | 'cancelled' | 'fraudulent';

export interface IPaymentSession {
  id: string;
  merchantId: string;
  userId: string;
  method: string;
  amount: number;
  currency: string;
  status: 'created' | 'confirmed' | 'cancelled';
  timestamp: Date;
  confirm(): void;
  cancel(): void;
}

@Injectable()
export class SessionService {
  constructor(
    @InjectRepository(PaymentSession)
    private paymentSessionsRepository: Repository<PaymentSession>,
  ) {}

  async createPaymentSession(
    merchant: AuthenticatedMerchant,
    data: CreateSessionInput,
  ) {
    const id = generateUniqueId(32, 'session_');
    const session = this.paymentSessionsRepository.create({
      id,
      merchantId: merchant.id,
      amount: data.amount,
      payment_methods: data.payment_methods,
      status: 'unpaid',
      timestamp: new Date(),
      checkout_type: data.checkout_type,
      custom_text: data.notes,
      discount_codes: data.discount_codes?.map((code) => code.code),
      goods_sold_type: data.goods_sold_type,
      reference_id: data.reference_id,
      return_url: data.return_url,
      success_url: data.success_url,
      subtotal: data.amount,
      total: data.amount,
      // expires in 3 days
      expires_at: data.expires_at || Date.now() + 3 * 24 * 60 * 60,
      livemode: !merchant.api_key.is_test,
      sessionId: generateUniqueId(16),
    });

    await this.paymentSessionsRepository.save(session);

    const url = `https://checkout.buildwithtif.xyz/${session.id}`;

    return { checkout_url: url, session_id: session.id };
  }

  async revokePaymentSession(
    merchant_id: string,
    session_id: string,
    reason: RevokeReason,
  ) {
    const session = await this.paymentSessionsRepository.findOne({
      where: { id: session_id, merchantId: merchant_id },
    });

    if (!session) {
      throw new NotFoundException('Session not found');
    }

    if (session.status === 'revoked') {
      throw new InternalServerErrorException('Session already cancelled');
    }

    if (session.status === 'paid') {
      throw new InternalServerErrorException('Session already confirmed');
    }

    session.status = 'revoked';
    session.updated_at = new Date().getTime() / 1000;
    session.cancel_reason = reason;

    return this.paymentSessionsRepository.save(session);
  }

  async getPaymentSession(id: string) {
    return this.paymentSessionsRepository.findOne({ where: { id } });
  }

  async getPaymentSessionsByMerchantId(user_id: string) {
    return this.paymentSessionsRepository.find({
      where: { merchantId: user_id },
    });
  }
}
