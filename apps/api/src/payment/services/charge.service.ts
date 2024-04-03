import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Charge } from '../models/charge.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ChargeService {
  constructor(
    @InjectRepository(Charge) private chargeRepository: Repository<Charge>,
  ) {}

  async getChargesForPayment(paymentId: string): Promise<Charge[]> {
    return this.chargeRepository.find({ where: { payment: paymentId } });
  }

  async getChargeDetail(paymentId: string, chargeId: string): Promise<Charge> {
    return this.chargeRepository.findOne({
      where: { payment: paymentId, id: chargeId },
    });
  }

  async createCharge(chargeDetails: Charge): Promise<Charge> {
    return this.chargeRepository.save(chargeDetails);
  }

  async updateCharge(chargeDetails: Charge): Promise<Charge> {
    return this.chargeRepository.save(chargeDetails);
  }

  async deleteCharge(chargeId: string): Promise<void> {
    await this.chargeRepository.delete({ id: chargeId });
  }

  async getChargesForMerchant(merchant_id: string): Promise<Charge[]> {
    return this.chargeRepository.find({ where: { merchant_id } });
  }

  async getChargesForCustomer(customer_id: string): Promise<Charge[]> {
    return this.chargeRepository.find({ where: { customer_id } });
  }

  async getChargesForStatus(
    status: 'paid' | 'processing' | 'failed',
  ): Promise<Charge[]> {
    return this.chargeRepository.find({ where: { status } });
  }
}
