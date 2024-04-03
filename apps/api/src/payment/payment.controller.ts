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
} from '@nestjs/common';
import { ExecutePaymentDto, PaymentService } from './payment.service';
import { VoidDto } from './dto/void.dto';
import { PAYMENT_METHODS } from 'src/common/enum';
import { JwtAuthGuard } from 'src/auth/guard/jwt.guard';
import { ApiKeyGuard } from 'src/auth/guard/apikey-auth.guard';
import Payment from './models/payment.entity';
import { Charge } from './models/charge.entity';
import { PaymentResponse } from './payments.interface';
import { UpdatePaymentInput } from './dto/payment.input';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @UseGuards(ApiKeyGuard)
  @Get(':payment_id')
  async getPayment(@Param('payment_id') payment_id: string): Promise<Payment> {
    return this.paymentService.getPayment(payment_id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('merchant/:merchant_id')
  async getPayments(
    @Param('merchant_id') merchant_id: string,
  ): Promise<Payment[]> {
    return this.paymentService.getPayments(merchant_id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('charge/:payment_id')
  async getChargesForPayment(
    @Param('payment_id') payment_id: string,
  ): Promise<Charge[]> {
    return this.paymentService.getChargesForPayment(payment_id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('charge/:payment_id/:charge_id')
  async getChargeDetail(
    @Param('payment_id') payment_id: string,
    @Param('charge_id') charge_id: string,
  ): Promise<Charge> {
    return this.paymentService.getChargeDetail(payment_id, charge_id);
  }

  @UseGuards(ApiKeyGuard)
  @Post('pay/:payment_id/:payment_method')
  @HttpCode(HttpStatus.CREATED)
  async charge(
    @Param('payment_id') payment_id: string,
    @Param('payment_method') payment_method: string,
    @Body() checkoutDetails: ExecutePaymentDto,
  ): Promise<PaymentResponse> {
    return this.paymentService.executePayment(
      payment_id,
      payment_method as PAYMENT_METHODS,
      checkoutDetails,
    );
  }

  @UseGuards(ApiKeyGuard)
  @Put('pay/:payment_id')
  @HttpCode(HttpStatus.CREATED)
  async updatePayment(
    @Param('payment_id') payment_id: string,
    @Body() refundRequest: UpdatePaymentInput,
  ): Promise<Payment> {
    return this.paymentService.updatePaymentDetails(payment_id, refundRequest);
  }

  @UseGuards(ApiKeyGuard)
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
