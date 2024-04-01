import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import logger from 'src/common/logger';
import { DUser } from './models/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JWTAuthService {
  validateApiKey(apiKey: string) {
    const apiKeys: string[] = ['api-key-1', 'api-key-2']
    return apiKeys.find(key => apiKey === key)
  }

}

@Injectable()
export class UsersService {
  constructor(@InjectRepository(DUser) private userRepository: Repository<DUser>) {
  }

  async findOne(email: string): Promise<DUser | undefined> {
    return this.userRepository.findOne({ where: {
      email
    } });
  }

  async create(user: DUser): Promise<DUser> {
    return this.userRepository.save(user)
  }
}

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    console.log(await bcrypt.hash(pass, 10));
    if (user && bcrypt.compare(user.password, await bcrypt.hash(pass, 10))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    // console.log(user.user);
    const payload = { 
        user : {
            id: user.user.id, 
            email: user.user.email, 
            name: user.user.name, 
            created_at: user.user.created_at, 
            updated_at: user.user.updated_at 
        }
    };
    // console.log({payload});
    return {
      access_token: this.jwtService.sign(payload),
    };

  }

    async register(data) {
        data.password = await bcrypt.hash(data.password, 10)
        let response = await this.usersService.create(data);
        if (response) {
            const { password, ...result } = response;
            return result;
        }
    }

  decodeToken(token) : any {
    return this.jwtService.decode(token)
  }
}