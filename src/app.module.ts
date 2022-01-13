import { Inject, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetsModule } from './pets/pets.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { OwnersModule } from './owners/owners.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { PermissionsModule } from './permissions/permissions.module';
import { typeOrmAsyncConfig } from 'config/database.config';
import { ConfigModule } from '@nestjs/config';
import { loadTypeOrmConnectionFromEnv } from './loader';
import { ConnectionOptionsEnvReader } from 'typeorm/connection/options-reader/ConnectionOptionsEnvReader';


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
	PetsModule,OwnersModule, AuthModule, UsersModule, RolesModule, PermissionsModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
