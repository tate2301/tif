import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class SecretKeyGuard extends AuthGuard('headerapikey') {
  constructor() {
    super();
  }

  handleRequest(err, user, info) {
    // You can implement custom logic here if needed
    return user;
  }
}
