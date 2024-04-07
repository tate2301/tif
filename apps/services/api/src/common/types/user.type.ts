import { Request } from 'express';
import { AuthenticatedMerchant } from 'src/auth/strategy/apikey.strategy';
import { Merchant } from 'src/user/models/user.entity';

export interface RequestWithAuth extends Request {
  user: Merchant;
}

export interface RequestWithApiKey extends Request {
  user: AuthenticatedMerchant;
}
