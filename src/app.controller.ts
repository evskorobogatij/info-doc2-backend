import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth/auth.service';
import { AuthInfo } from './auth/dto/auth-info.dto';
import { AuthResult } from './auth/dto/auth-result.dto';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @ApiTags('auth')
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  @ApiOperation({
    description:
      'Аутентификация пользователя. В ответ на логин/пароль получаем объект, содержащий jwt токен, который используется для защищенных роутов',
  })
  @ApiBody({
    type: AuthInfo,
  })
  @ApiOkResponse({
    description:
      'Объект, содержащий jwt токен, который используется для защищенных роутов',
    type: AuthResult,
  })
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
