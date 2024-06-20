import 'dotenv/config';
// import { DataSourceOptions } from 'typeorm';

export let config = (): any => {
  const config = {
    migrationsTableName: 'migrations',
    type: 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 5432,
    synchronize: false,
    logging: true,
    ...(process.env.DB_SSL ? { ssl: { rejectUnauthorized: false } } : {}),
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrations: ['dist/migrations/*{.ts,.js}'],
    migrationsRun: true,
  };
  return config;
};
