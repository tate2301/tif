import { Injectable, Logger } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class SecretKeyGuard extends AuthGuard('secret_headerapikey') {
  constructor() {
    super();
  }
}
