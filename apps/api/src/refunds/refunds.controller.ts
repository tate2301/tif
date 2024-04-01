import { Controller, Get, Patch, Post } from '@nestjs/common';
import { IRefundService } from './refunds.service';

@Controller('refund')
export class RefundsController {
  @Get()
  async get_refunds() {}

  @Post()
  async refund_payment() {}

  @Patch()
  async update_refund_tx_details() {}
}
