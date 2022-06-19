import "dotenv/config";
import config from "./keys";

const dbConfig = {
  development: {
    host: "localhost",
    port: 5432,
    dialect: "postgres",
    database: config.db_name,
    username: config.db_username,
    password: config.db_password,
    logging: false,
  },
  test: {
    host: "localhost",
    port: 5432,
    dialect: "postgres",
    database: config.db_name,
    username: config.db_username,
    password: config.db_password,
    logging: false,
  },
  production: {
    host: "localhost",
    port: 5432,
    dialect: "postgres",
    database: config.db_name,
    username: config.db_username,
    password: config.db_password,
    logging: false,
  },
};

export default dbConfig;
