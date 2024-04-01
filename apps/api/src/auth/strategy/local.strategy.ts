import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AbstractStrategy, PassportStrategy } from "@nestjs/passport";
import { AuthService } from "../auth.service";
import logger from "src/common/logger";
import { Request } from "express";


// TODO: replace with actual strategy
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, "local") {
    constructor(private authService: AuthService) {
        super({
            usernameField: 'email',
            passwordField: 'password',
          });

      }
    
      async validate(username: string, password: string): Promise<any> {
        
        const user = await this.authService.validateUser(username, password);
        if (!user) {
          throw new UnauthorizedException();
        }
        return user;
      }
}