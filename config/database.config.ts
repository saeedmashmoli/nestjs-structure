import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm';

export default class TypeOrmConfig {
  static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: configService.get('DB_HOST'),
      username: configService.get('DB_USERNAME'),
      password: configService.get('DB_PASSWORD'),
      database: configService.get('DB_NAME'),
      port: Number.parseInt(configService.get('DB_PORT')),
      entities: [__dirname + '/../' + configService.get('DB_ENTITIES_PATH')],
      synchronize: Boolean(configService.get('DB_SYNC'))
//   migrations: [migrationPath],
//   migrationsRun: process.env.TYPEORM_MIGRATIONS_RUN === 'true',
//   seeds: [`src/db/seeds/*.seed.ts`],
//   cli: {
//     migrationsDir: 'src/db/migrations',
//     entitiesDir: 'src/db/entities',
//   },
    }
  }
}
export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions =  {
  imports : [ConfigModule],
  useFactory: async (configService: ConfigService): Promise<TypeOrmModuleOptions> => TypeOrmConfig.getOrmConfig(configService),
  inject: [ConfigService]
};