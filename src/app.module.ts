import { Inject, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetsModule } from './pets/pets.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { OwnersModule } from './owners/owners.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { PermissionsModule } from './permissions/permissions.module';
import { ConfigModule } from '@nestjs/config';
import { loadTypeOrmConnectionFromEnv } from './loader';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './users/users.service';


@Module({
  imports: [
	GraphQLModule.forRoot({
		autoSchemaFile: join(process.cwd(),'src/schema.gql'),
	}),
	ConfigModule.forRoot(),
	// TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
	TypeOrmModule.forRootAsync({
		useFactory: () => {
			return loadTypeOrmConnectionFromEnv()
		}
	}),
	PetsModule,OwnersModule, UsersModule, RolesModule, PermissionsModule, AuthModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
