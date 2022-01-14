import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesService } from 'src/roles/roles.service';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { RolesModule } from 'src/roles/roles.module';

@Module({
  imports : [TypeOrmModule.forFeature([User]),RolesModule],
  providers: [UsersService, UsersResolver],
  exports: [UsersService]
})
export class UsersModule {}
