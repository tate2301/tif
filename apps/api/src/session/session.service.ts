import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentSession } from './models/payment_session.entity';
import { Repository } from 'typeorm';
import { generateUniqueId } from 'src/common/utils';
import { CreateSessionInput } from './dto/create_session.input';
import { Merchant } from 'src/user/models/user.entity';
import { AuthenticatedMerchant } from 'src/auth/strategy/apikey.strategy';
import { PatchSessionInput } from './dto/patch_session.input';
import { Discount } from '../payment/models/discount.entity';
import { Product } from 'src/product/models/product.entity';
import { PaymentSessionProducts } from './models/payment_session_products.entity';

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
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(PaymentSessionProducts)
    private paymentSessionProductsRepository: Repository<PaymentSessionProducts>,
  ) {}

  private sessionGuard(session: PaymentSession, merchant_id: string) {
    if (session.merchantId !== merchant_id) {
      throw new NotFoundException('Session not found');
    }

    if (session.status === 'revoked') {
      throw new InternalServerErrorException('Session already cancelled');
    }

    if (session.status === 'paid' || session.status === 'no_payment_required') {
      throw new InternalServerErrorException('Session already confirmed');
    }

    return true;
  }

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
      goods_sold_type: data.goods_sold_type,
      reference_id: data.reference_id,
      return_url: data.return_url,
      success_url: data.success_url,
      subtotal: data.amount,
      total: data.amount,
      // expires in 3 days
      expires_at: data.expires_at || Date.now() + 3 * 24 * 60 * 60,
      livemode: !merchant.api_key.is_test,
    });

    let payment_session_products: PaymentSessionProducts = null;

    // if (data.items) {
    //   let items: string[] = [];
    //   for (const item of data.items) {
    //     const product = await this.productRepository.findOne({
    //       where: { id: item.product },
    //     });

    //     if (!product) {
    //       throw new NotFoundException('Product not found');
    //     }

    //     items.push(item.product);
    //   }

    //   payment_session_products =
    //     await this.paymentSessionProductsRepository.save({
    //       id: generateUniqueId(32, 'psp_'),
    //       products: JSON.stringify(items),
    //     });
    // }

    await this.paymentSessionsRepository.save({
      ...session,
      products: JSON.stringify(data.items),
    });

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

    this.sessionGuard(session, merchant_id);

    session.status = 'revoked';
    session.updated_at = new Date().getTime() / 1000;
    session.cancel_reason = reason;

    return this.paymentSessionsRepository.save(session);
  }

  async updatePaymentSession(
    merchant: AuthenticatedMerchant,
    session_id: string,
    data: PatchSessionInput,
  ): Promise<PaymentSession> {
    const session = await this.paymentSessionsRepository.findOne({
      where: { id: session_id, merchantId: merchant.id },
    });

    this.sessionGuard(session, merchant.id);

    session.amount = data.amount;
    session.custom_text = data.notes;
    session.reference_id = data.reference_id;
    session.return_url = data.return_url;
    session.success_url = data.success_url;
    session.subtotal = data.amount;
    session.total = data.amount;

    return this.paymentSessionsRepository.save(session);
  }

  async getPaymentSession(id: string) {
    const session = await this.paymentSessionsRepository.findOne({
      where: { id },
    });
    const product = JSON.parse(session.products)[0].product;
    const products = await this.productRepository.findOne({
      where: { id: product },
    });

    return {
      ...session,
      products,
    };
  }

  async getPaymentSessionsByMerchantId(user_id: string) {
    return this.paymentSessionsRepository.find({
      where: { merchantId: user_id },
    });
  }
}
