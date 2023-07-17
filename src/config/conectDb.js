import { Sequelize } from "sequelize";

export const sequilize = new Sequelize("db_hotel", "campus", "campus2023", {
  host: "localhost",
  dialect: "mysql",
});
