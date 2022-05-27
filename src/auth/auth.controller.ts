
import { Controller, HttpCode, HttpStatus, Post, UseGuards, Request, Body } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { IsPublic } from './decorators/is-public.decorator';
import { LoginUser } from './dto/login-user.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthRequest } from './models/auth-request';

@Controller()
export class AuthController {
  constructor( readonly authService: AuthService){}
    
  @IsPublic()
  @ApiTags('Auth')
  @Post('login')
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  @ApiBody({type: LoginUser})
  @ApiOperation({ summary: 'Efetua o login'})
  login(@Request() req: AuthRequest,) {
  console.log(req.user)
      return  this.authService.login(req.user)
    }
  }