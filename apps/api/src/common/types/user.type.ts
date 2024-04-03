import { Request } from 'express';
import { AuthenticatedMerchant } from 'src/auth/strategy/apikey.strategy';
import { DUser } from 'src/user/models/user.entity';

export interface RequestWithAuth extends Request {
  user: DUser;
}

export interface RequestWithApiKey extends Request {
  user: AuthenticatedMerchant;
}
