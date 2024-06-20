import 'dotenv/config';
import { DataSource } from 'typeorm';
import { config } from './ormconfig';

let configProp = config();
Object.assign(configProp, {
  entities: ['src/**/*.entity{.ts,.js}'],
});
export const AppDataSource = new DataSource(configProp);
