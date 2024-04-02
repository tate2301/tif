import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from 'src/auth/auth.service';
import logger from 'src/common/logger';
import { UsersService } from 'src/user/service/user.service';

@Injectable()
export class AuthInterceptor implements NestInterceptor {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    let tokenArray = req.headers.authorization;
    new Logger().debug('API Key Strategy');

    if (tokenArray) {
      req.body['user'] = this.authService.decodeToken(
        tokenArray.split(' ')[1],
      ).user;
    }

    return next.handle().pipe();
  }
}
