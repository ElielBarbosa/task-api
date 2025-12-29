import express from "express";
import { UserController } from "../controllers/user.controller.js";

export const userRouter = express.Router();
const userController = new UserController();

//Pegar todos os usuarios
userRouter.post("/login", (req, res) => { });

//Criar usuario
userRouter.post("/register", userController.cadastrarUsuario);

// //Atualizar usuario
// userRouter.put("/update", (req, res) => {});

// //Deletar usuario
// userRouter.delete("/delete", (req, res) => {});