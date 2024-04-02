import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from "src/common/constants";
import { UsersService } from "src/user/service/user.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });

  }

  async validate(payload: any) {
    const user = await this.usersService.findOne(payload.email)
    
    return { 
        ...user,
        email: payload.email, 
        first_name: payload.first_name,
        last_name: payload.last_name, 
        created_at: payload.created_at, 
        updated_at: payload.updated_at  
    };
  }
}