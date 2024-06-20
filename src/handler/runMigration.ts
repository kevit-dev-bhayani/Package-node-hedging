import { ENVIRONMENT } from '../constant';
import { getLocalSecrect } from './getDbDetails';
import { DataSource } from 'typeorm';
import { config } from '../config/ormconfig';

const assignENV = (awsCred: any) => {
  const { host, username, password, dbname, dbInstanceIdentifier, database, ssl } = awsCred;
  process.env.DB_HOST = host;
  process.env.DB_USERNAME = username;
  process.env.DB_PASSWORD = password;
  process.env.DB_NAME = dbname || dbInstanceIdentifier || database;
  if (ssl) {
    process.env.DB_SSL = ssl;
  }
  return;
};

const getConnect = async () => {
  console.log('DB Connection Initializing ...');
  const AppDataSource = new DataSource(config());
  const connection = await AppDataSource.initialize();
  console.log('DB Connection successfull');
  return connection;
};

export const main: any = async (prop: any) => {
  try {
    let awsCred = {};
    let version: any = prop.version ? prop.version : prop;

    const isLocalEnv =
      process.env.NODE_ENV && (process.env.NODE_ENV === ENVIRONMENT.DEV || process.env.NODE_ENV === ENVIRONMENT.LOCAL);

    if (isLocalEnv) {
      Object.assign(awsCred, getLocalSecrect(version));
    }

    console.log('awsCred --->', awsCred);
    assignENV(awsCred);
    const connection = await getConnect();
    console.log('Migration Init ...');
    await connection.runMigrations();
    console.log('Migration successful');
    return true;
  } catch (err) {
    console.error('Error while executing commands');
    console.log(err);
    throw err;
  }
};
