import { ApiProperty } from '@nestjs/swagger';

export class AuthResult {
  @ApiProperty({
    description: 'Токен доступа',
    type: String,
    example: 'eyJhbGciOiJIUzI1NiIs...',
  })
  access_token: string;
}
