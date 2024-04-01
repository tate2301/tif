import { Controller, Request, Post, UseGuards, Get, Res, Req, Body, UnauthorizedException,  } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guard/local.guard';
import { JwtAuthGuard } from './guard/jwt.guard';
import { Public } from './decorators/public.decorator';
import { LoginInput } from './dto/login.input';
import { RegisterUserInput } from './dto/register.input';
import logger from 'src/common/logger';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @Public()
    @Post('register')
    async register(@Body() registrationDetails: RegisterUserInput) {
        return this.authService.register(registrationDetails);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }

   
}