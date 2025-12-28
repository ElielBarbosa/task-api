import express from "express";

export const userRouter = express.Router();

//Pegar todos os usuarios
userRouter.post("/login", (req, res) => { });

//Criar usuario
userRouter.post("/register", (req, res) => { });

// //Atualizar usuario
// userRouter.put("/update", (req, res) => {});

// //Deletar usuario
// userRouter.delete("/delete", (req, res) => {});