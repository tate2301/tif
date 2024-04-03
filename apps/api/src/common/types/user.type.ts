import { Request } from 'express';
import { DUser } from 'src/user/models/user.entity';

export interface RequestWithAuth extends Request {
  user: DUser;
}
