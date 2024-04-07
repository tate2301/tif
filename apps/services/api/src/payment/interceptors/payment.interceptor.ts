import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  BadRequestException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  PaymentAlreadyProcessedException,
  PaymentVoidedException,
} from '../exceptions/payment.exception';
import { Reflector } from '@nestjs/core';

@Injectable()
export class PaymentCheckInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const reflector = new Reflector();
    const checks = reflector.get('payment_checks', context.getHandler());
    if (!checks) {
      return next.handle();
    }

    return next.handle().pipe(
      catchError((error) => {
        if (error instanceof PaymentVoidedException) {
          throw new BadRequestException('Payment has already been voided.');
        } else if (error instanceof PaymentAlreadyProcessedException) {
          throw new BadRequestException('Payment has already been processed.');
        } else {
          throw error;
        }
      }),
    );
  }
}
