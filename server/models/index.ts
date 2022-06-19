import { Sequelize } from "sequelize-typescript";
import config from "@config/keys";
import User from "./user";
import { User as UserType } from "./types";
const dbConfig = require("@config/db").default;

const options = dbConfig[config.node_env];

const sequelize = new Sequelize({
  ...options,
  models: [User],
});

const { models } = sequelize;

export { sequelize, models, UserType as User };
