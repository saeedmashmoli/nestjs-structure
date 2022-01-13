import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from 'dotenv';
import  {ConnectionOptionsEnvReader}  from 'typeorm/connection/options-reader/ConnectionOptionsEnvReader';


export const loadEnviromentVariables = async () => {
    config();
};

export const loadTypeOrmConnectionFromEnv = async (): Promise<TypeOrmModuleOptions> => {
    const envReader = new ConnectionOptionsEnvReader();
    const connectionOptions: TypeOrmModuleOptions = {
        ...(await envReader.read())[0],
        entities: [`${__dirname}/${process.env.TYPEORM_ENTITIES}`],
        migrations: []
    }
    return connectionOptions;
}