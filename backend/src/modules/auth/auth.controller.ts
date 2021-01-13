import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CredentialsDto } from './dtos/credentials.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @Post('/login')
  @ApiOperation({summary: 'Login de usupario'})
  @ApiResponse({ status: 201, description: 'Created'})
  login(@Body() credentials: CredentialsDto): Promise<{token: string}> {
    return this.service.login(credentials);
  }
}
