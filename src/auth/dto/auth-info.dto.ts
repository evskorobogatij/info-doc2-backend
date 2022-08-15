import { ApiProperty } from '@nestjs/swagger';

export class AuthInfo {
  @ApiProperty({
    description: 'Имя пользователя',
    example: 'user',
    type: String,
  })
  username: string;

  @ApiProperty({
    description: 'Пароль',
    example: '123',
    type: String,
  })
  password: string;
}
