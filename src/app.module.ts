import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetsModule } from './pets/pets.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { OwnersModule } from './owners/owners.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [GraphQLModule.forRoot({
		autoSchemaFile: join(process.cwd(),'src/schema.gql'),
	}),
	TypeOrmModule.forRoot({
		"type": "mysql",
		"host": "localhost",
		"port": 3306,
		"username": "root",
		"password": "",
		"database": "nest-test",
		"entities": ["dist/**/*.entity.{ts,js}"],
		// "entities": ['dist/*/.entity{.ts,.js}'],
		"synchronize": true
	}),PetsModule,OwnersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}