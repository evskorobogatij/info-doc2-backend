import {
  Controller,
  Get,
  Post,
  Request,
  Response,
  StreamableFile,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBody,
  ApiExcludeEndpoint,
  ApiHideProperty,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { createReadStream } from 'fs';
import { AuthService } from './auth/auth.service';
import { AuthInfo } from './auth/dto/auth-info.dto';
import { AuthResult } from './auth/dto/auth-result.dto';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import * as path from 'path';

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

  @Get('/spec.json')
  @ApiExcludeEndpoint()
  @ApiTags('service')
  // @ApiOperation({ description: 'Спецификация api-сервиса' })
  async specs(@Response({ passthrough: true }) res) {
    //
    const file = createReadStream(
      path.join(process.cwd(), 'swagger-spec.json'),
    );
    return new StreamableFile(file);
  }
}
