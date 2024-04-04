import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class AnyApiKeyGuard extends AuthGuard('implicit_headerapikey') {
  constructor() {
    super();
  }
}
