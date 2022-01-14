import { Controller, Get, Post, UseGuards,Request } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
// import { AuthenticatedGuard } from './auth/authenticated.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { Role } from './roles/entities/role.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,private readonly authService: AuthService) {}

  // @Roles(Role)
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    // use jwt passport strategy
    return this.authService.login(req.user)

    // return req.user;
  }

  // @UseGuards(AuthenticatedGuard) // passport local strategy 
  @UseGuards(JwtAuthGuard) // passport jwt strategy
  @Post('protected')
  getHello(@Request() req): string {
    return req.user;
  }
}
