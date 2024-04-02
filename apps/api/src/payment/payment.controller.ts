import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  HttpCode,
  HttpStatus,
  Put,
  Delete,
} from '@nestjs/common';
import { ExecutePaymentDto, PaymentService } from './payment.service';
import { RefundDto } from './dto/refund.dto';
import { VoidDto } from './dto/void.dto';
import logger from 'src/common/logger';
import { PAYMENT_METHODS } from 'src/common/enum';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Get(':payment_id')
  async getPayment(@Param('payment_id') payment_id: string) {
    // Implementation to query and return the payment status
    logger.info(`Getting payment status for payment_id: ${payment_id}`);
  }

  @Get('merchant/:merchant_id')
  async getPayments(@Param('merchant_id') merchant_id: string) {
    logger.info('Getting payments for merchant')
  }

  @Get('charge/:payment_id')
  async getChargesForPayment(@Param("payment_id") payment_id: string) {

  }

  @Get('charge/:payment_id/:charge_id')
  async getChargeDetail(@Param("payment_id") payment_id: string, @Param("charge_id") charge_id: string) {

  }

  @Post('pay/:payment_id/:payment_method')
  @HttpCode(HttpStatus.CREATED)
  async charge(
    @Param('payment_id') payment_id: string,
    @Param('payment_method') payment_method: string,
    @Body() checkoutDetails: ExecutePaymentDto,
  ) {
    // Logic to handle checkout operation
    // This might involve calling a method in PaymentService or another service dedicated to handling checkouts
    return this.paymentService.executePayment(
      payment_id,
      payment_method as PAYMENT_METHODS,
      checkoutDetails,
    );
  }

  @Put('pay/:payment_id')
  @HttpCode(HttpStatus.CREATED)
  async updatePayment(
    @Param('payment_id') payment_id: string,
    @Body() refundRequest: RefundDto,
  ) {
    // Logic to handle checkout operation
    // This might involve calling a method in PaymentService or another service dedicated to handling checkouts
    return this.paymentService.refundTransaction(payment_id, refundRequest);
  }

  @Delete('pay/:payment_id')
  @HttpCode(HttpStatus.CREATED)
  async void(
    @Param('payment_id') payment_id: string,
    @Body() voidRequest: VoidDto,
  ) {
    // Logic to handle checkout operation
    // This might involve calling a method in PaymentService or another service dedicated to handling checkouts
    return this.paymentService.voidPayment(payment_id, voidRequest);
  }

}
