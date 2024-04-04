import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class AnyApiKeyGuard extends AuthGuard('headerapikey') {
  constructor() {
    super();
  }

  handleRequest(err, user, info) {
    // You can implement custom logic here to check either publishable or secret key
    return user;
  }
}
