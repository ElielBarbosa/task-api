import { DataTypes } from "sequelize";
import { sequelize } from "../../config/database.js";

export const User = sequelize.define(
  "User",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password_hash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "user", // nome da tabela no banco
    timestamps: false, // cria colunas createdAt e updatedAt
  },
);
