import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Charge } from '../models/charge.entity';
import { Repository } from 'typeorm';

/**
 * Service for managing charges.
 */
@Injectable()
export class ChargeService {
  constructor(
    @InjectRepository(Charge) private chargeRepository: Repository<Charge>,
  ) {}

  /**
   * Retrieves all charges for a specific payment.
   * @param paymentId - The ID of the payment.
   * @returns A promise that resolves to an array of charges.
   */
  async getChargesForPayment(paymentId: string): Promise<Charge[]> {
    return this.chargeRepository.find({ where: { payment: paymentId } });
  }

  /**
   * Retrieves the details of a specific charge for a payment.
   * @param paymentId - The ID of the payment.
   * @param chargeId - The ID of the charge.
   * @returns A promise that resolves to the charge details.
   */
  async getChargeDetail(paymentId: string, chargeId: string): Promise<Charge> {
    return this.chargeRepository.findOne({
      where: { payment: paymentId, id: chargeId },
    });
  }

  /**
   * Creates a new charge.
   * @param chargeDetails - The details of the charge to create.
   * @returns A promise that resolves to the created charge.
   */
  async createCharge(chargeDetails: Charge): Promise<Charge> {
    return this.chargeRepository.save(chargeDetails);
  }

  /**
   * Updates an existing charge.
   * @param chargeDetails - The updated details of the charge.
   * @returns A promise that resolves to the updated charge.
   */
  async updateCharge(chargeDetails: Charge): Promise<Charge> {
    return this.chargeRepository.save(chargeDetails);
  }

  /**
   * Deletes a charge.
   * @param chargeId - The ID of the charge to delete.
   * @returns A promise that resolves when the charge is deleted.
   */
  async deleteCharge(chargeId: string): Promise<void> {
    await this.chargeRepository.delete({ id: chargeId });
  }

  /**
   * Retrieves all charges for a specific merchant.
   * @param merchant_id - The ID of the merchant.
   * @returns A promise that resolves to an array of charges.
   */
  async getChargesForMerchant(merchant_id: string): Promise<Charge[]> {
    return this.chargeRepository.find({ where: { merchant_id } });
  }

  /**
   * Retrieves all charges for a specific customer.
   * @param customer_id - The ID of the customer.
   * @returns A promise that resolves to an array of charges.
   */
  async getChargesForCustomer(customer_id: string): Promise<Charge[]> {
    return this.chargeRepository.find({ where: { customer_id } });
  }

  /**
   * Retrieves all charges with a specific status.
   * @param status - The status of the charges ('paid', 'processing', or 'failed').
   * @returns A promise that resolves to an array of charges.
   */
  async getChargesForStatus(
    status: 'paid' | 'processing' | 'failed',
  ): Promise<Charge[]> {
    return this.chargeRepository.find({ where: { status } });
  }
}
