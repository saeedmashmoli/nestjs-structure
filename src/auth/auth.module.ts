import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
// import { SessionSerializer } from './session.serializer'; 
@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    // PassportModule.register({session: true}) // use session passport
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: '60s'
      }
    })
  ],
  providers: [
    AuthService,
    LocalStrategy, // use session passport,
    // SessionSerializer // use session passport
    JwtStrategy
  ],
  exports: [AuthService]
})
export class AuthModule {}
