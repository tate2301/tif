import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import logger from 'src/common/logger';
import { DUser } from './models/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { randomUUID } from 'crypto';
import { RegisterUserInput } from './dto/register.input';

@Injectable()
export class APIKeyAuthService {
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

  async create(user: RegisterUserInput): Promise<DUser> {
    if(await this.userRepository.findOne({where: {email: user.email}})) {
      throw new ConflictException()
    }
    const uuid = randomUUID()
    const newUser = await this.userRepository.save({...user, uuid}).then()
    logger.info(`Created user with email: ${user.email}`)
    return newUser

  }
}

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async validateUser(email: string, pass: string): Promise<DUser> {
    logger.info("Validating")
    const user = await this.usersService.findOne(email);
    if (user && bcrypt.compare(user.password, await bcrypt.hash(pass, 10))) {
      const { ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: DUser) {
    const payload = { 
        user : {
            id: user.id, 
            email: user.email, 
            first_name: user.first_name,
            last_name: user.last_name, 
            created_at: user.created_at, 
            updated_at: user.updated_at 
        }
    };

    return {
      access_token: this.createAccessToken(payload),
    };

  }

  async register(data: RegisterUserInput) {
      data.password = await bcrypt.hash(data.password, 10)
      let response = await this.usersService.create(data);
      if (response) {
          const { ...result } = response;
          return result;
      }
  }

  async createAccessToken(payload: any) {
    return this.jwtService.sign(payload, { expiresIn: '15m' });
  }

  async createRefreshToken(email: string) {
    const tokenId = randomUUID();
    return this.jwtService.sign({ id: email, tokenId: tokenId }, { expiresIn: '7d' });
  }

  decodeToken(token) : any {
    return this.jwtService.decode(token)
  }

  decodeRefreshToken(token: string) {
    try {
      return this.jwtService.verify(token);
    } catch (error) {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }

  async replaceRefreshToken(userId: string, oldTokenId: string) {
    // Invalidate the old token by any means, e.g., storing the used token ID in a blacklist.
    // Here, you might also check against a list of previously issued tokens for this user.

    return this.createRefreshToken(userId);  // Generate a new token as shown previously
  }
}