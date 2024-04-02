import {
  Controller,
  Request,
  Post,
  UseGuards,
  Get,
  Body,
  Logger,
  Req,
  BadRequestException,
  UnauthorizedException,
  Res,
  Response,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guard/local.guard';
import { Public } from './decorators/public.decorator';
import { RegisterUserInput } from './dto/register.input';
import { JwtAuthGuard } from './guard/jwt.guard';
import { REFRESH_TOKEN_AGE } from 'src/common/constants';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req, @Res({ passthrough: true }) res) {
    const tokens = await this.authService.login(req.user);
    await this.authService.setRefreshTokenCookie(res, tokens.refresh_token);
    return { access_token: tokens.access_token };
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

  @Post('refresh')
  async refresh(@Req() request, @Res() res) {
    const refreshToken = request.body.refreshToken;
    if (!refreshToken) {
      throw new BadRequestException('Refresh token is required');
    }

    try {
      const newAccessToken = await this.authService.refreshTokens(refreshToken);
      await this.authService.setRefreshTokenCookie(
        res,
        newAccessToken.refresh_token,
      );
      return { accessToken: newAccessToken };
    } catch (error) {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }
}
