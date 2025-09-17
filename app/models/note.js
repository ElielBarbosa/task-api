import { DataTypes } from "sequelize";
import { sequelize } from "../../config/database.js";

export const Note = sequelize.define(
  "Note",
  {
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "note", // nome da tabela no banco
    timestamps: false, // cria colunas createdAt e updatedAt
  },
);
