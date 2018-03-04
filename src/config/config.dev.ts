import { IConfigOptions } from "../types";

let config: IConfigOptions = {
  version: '2.3',
  serve: {
    port: 8080
  },
  keys: ['some secret hurr'],
  session: {
    key: 'rap2:sess'
  },
  db: {
    dialect: 'mysql',
    host: '101.201.153.140',
    port: 3306,
    username: 'emulian_dba',
    password: 'weR1team',
    database: 'emulian_rap2',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    logging: true
  }
}

export default config
