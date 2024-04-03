import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthenticatedMerchant } from 'src/auth/strategy/apikey.strategy';

@Injectable()
export class ImpersonatorGuard implements CanActivate {
  constructor() {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user: AuthenticatedMerchant = request.user;
    if (user.is_impersonating && !user.api_key) {
      return false;
    }

    return true;
  }
}
