import { sequelize } from "@/models";
import { Client } from "pg";

import config from "@config/keys";

export const setupDatabase = async () => {
  try {
    await createDatabase();
    await sequelize.sync();
  } catch (error) {
    console.log("Error at database setup");
  }
};

export const createDatabase = async () => {
  try {
    const client = new Client({
      user: config.db_username,
      password: config.db_password,
      host: "localhost",
      port: 5432,
      database: "postgres",
    });

    client.connect();

    client.query(`CREATE DATABASE "node-graphql"`, (err, res) => {
      client.end();
    });
  } catch (error) {
    console.log("Error at create database");
  }
};
