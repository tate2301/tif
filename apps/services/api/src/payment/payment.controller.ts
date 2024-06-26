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
  UseGuards,
  Req,
} from '@nestjs/common';
import { ExecutePaymentDto, PaymentService } from './payment.service';
import { VoidDto } from './dto/void.dto';
import { PAYMENT_METHODS } from 'src/common/enum';
import Payment from './models/payment.entity';
import { Charge } from './models/charge.entity';
import { PaymentResponse } from './payments.interface';
import { UpdatePaymentInput } from './dto/payment.input';
import { SecretKeyGuard } from 'src/auth/guard/api-key/secret.guard';
import { AnyApiKeyGuard } from 'src/auth/guard/api-key/any.guard';
import { ApiOperation } from '@nestjs/swagger';
import { RequestWithAuth } from 'src/common/types/user.type';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @UseGuards(SecretKeyGuard)
  @Get(':payment_id')
  async getPayment(@Param('payment_id') payment_id: string): Promise<Payment> {
    return this.paymentService.getPayment(payment_id);
  }

  @UseGuards(AnyApiKeyGuard)
  @Get('merchant/:merchant_id')
  async getPayments(
    @Param('merchant_id') merchant_id: string,
  ): Promise<Payment[]> {
    return this.paymentService.getPayments(merchant_id);
  }

  @UseGuards(AnyApiKeyGuard)
  @Get('charge/:payment_id')
  async getChargesForPayment(
    @Param('payment_id') payment_id: string,
  ): Promise<Charge[]> {
    return this.paymentService.getChargesForPayment(payment_id);
  }

  @UseGuards(AnyApiKeyGuard)
  @Get('charge/:payment_id/:charge_id')
  async getChargeDetail(
    @Param('payment_id') payment_id: string,
    @Param('charge_id') charge_id: string,
  ): Promise<Charge> {
    return this.paymentService.getChargeDetail(payment_id, charge_id);
  }

  // TODO: Implement the logic to handle the charge operation
  @UseGuards(AnyApiKeyGuard)
  @Post('pay/:session_id/:payment_method')
  @HttpCode(HttpStatus.CREATED)
  async charge(
    @Param('session_id') session_id: string,
    @Param('payment_method') payment_method: string,
    @Body() checkoutDetails: ExecutePaymentDto,
  ): Promise<Payment> {
    return this.paymentService.executePayment(session_id, checkoutDetails, '');
  }

  @UseGuards(SecretKeyGuard)
  @Put('pay/:payment_id')
  @HttpCode(HttpStatus.CREATED)
  async updatePayment(
    @Param('payment_id') payment_id: string,
    @Body() refundRequest: UpdatePaymentInput,
  ): Promise<Payment> {
    return this.paymentService.updatePaymentDetails(payment_id, refundRequest);
  }

  @ApiOperation({
    summary: 'Void a payment',
    description: 'Will void a payment and render it invalid',
  })
  @UseGuards(SecretKeyGuard)
  @Delete('pay/:payment_id')
  @HttpCode(HttpStatus.CREATED)
  async void(
    @Param('payment_id') payment_id: string,
    @Body() voidRequest: VoidDto,
  ): Promise<Payment> {
    // Logic to handle checkout operation
    // This might involve calling a method in PaymentService or another service dedicated to handling checkouts
    return this.paymentService.voidPayment(payment_id, voidRequest);
  }
}
