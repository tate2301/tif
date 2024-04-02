import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentSession } from './models/payment_session.entity';
import { Repository } from 'typeorm';
import { generatePrimaryKey } from 'src/common/utils';
import { CreateSessionInput } from './dto/create_session.input';

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
  constructor(@InjectRepository(PaymentSession) private paymentSessionRepo: Repository<PaymentSession>) {

  }

  createPaymentSession(merchant: any, data: CreateSessionInput) {
    const id = generatePrimaryKey()
    
  }

  revokePaymentSession(reason: "expire" | "success" | "fail" | "manual") {

  }

  async getPaymentSession(id: string) {
    return this.paymentSessionRepo.find({where: {id}})
  }


}
