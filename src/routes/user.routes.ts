import express from "express";

const usersRouter = express.Router();

//Pegar todos os usuarios
usersRouter.post("/login", (req, res) => {});

//Criar usuario
usersRouter.post("/register", (req, res) => {});

//Atualizar usuario
usersRouter.put("/update", (req, res) => {});

//Deletar usuario
usersRouter.delete("/delete", (req, res) => {});

export default usersRouter;
