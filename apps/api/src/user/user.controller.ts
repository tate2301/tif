import { Controller, Get, Patch, Post } from '@nestjs/common';

@Controller('merchant')
export class UsersController {
  @Get()
  async get_refunds() {}

  @Post()
  async refund_payment() {}

  @Patch()
  async update_refund_tx_details() {}
}
