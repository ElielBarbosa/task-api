import { Sequelize } from "sequelize";

// Configurações de conexão
export const sequelize = new Sequelize("nodemysql", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});
