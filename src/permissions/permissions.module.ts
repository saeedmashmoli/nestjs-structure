import { Module } from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { PermissionsResolver } from './permissions.resolver';

@Module({
  providers: [PermissionsResolver, PermissionsService],
  exports: [PermissionsService]
})
export class PermissionsModule {}
