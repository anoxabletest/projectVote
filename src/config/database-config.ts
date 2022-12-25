import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';

export const devConfig: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1234',
  database: 'quotes',
  entities: ['dist/**/*.entity{.ts, .js}'],
  migrations: ['dist/src/db/migrations/*.js'],
  synchronize: false,
  // cli: {
  //   migrationsDir: 'src/db/migrations',
  // },
};

export default devConfig;
