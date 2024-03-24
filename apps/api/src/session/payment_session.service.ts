import { Injectable } from '@nestjs/common';

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
export class PaymentSessionService {
  private sessions: IPaymentSession[] = [];

  createSession(session: IPaymentSession): void {
    this.sessions.push(session);
  }

  getSession(id: string): IPaymentSession | undefined {
    return this.sessions.find((session) => session.id === id);
  }

  confirmSession(id: string): void {
    const session = this.getSession(id);
    if (session) {
      session.confirm();
    }
  }

  cancelSession(id: string): void {
    const session = this.getSession(id);
    if (session) {
      session.cancel();
    }
  }
}
