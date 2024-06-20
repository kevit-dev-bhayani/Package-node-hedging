import { DBSECRET, ENVIRONMENT } from '../constant';

const region = process.env.AWS_REGION;
export let DB_SECRET = DBSECRET.v2;

export const getLocalSecrect = (version: string) => {
  const cred = {
    host: process.env[`DB_HOST`],
    username: process.env[`DB_USERNAME`],
    password: process.env[`DB_PASSWORD`],
    database: process.env[`DB_NAME`],
    port: process.env[`DB_PORT`],
    synchronize: process.env.NODE_ENV === ENVIRONMENT.LOCAL,
  };
  return cred;
};
