import express from "express";
import { Note } from "../models/note.js";

const notesRoute = express.Router();

//Pegar todas as notas
notesRoute.get("/show", (req, res) => {});
//Pegar notas de um usuario
notesRoute.get("/index", async (req, res) => {});
//Pegar notas por busca
notesRoute.get("/search", (req, res) => {});

//Criar nota
notesRoute.post("/create", (req, res) => {});

//Atualizar nota
notesRoute.put("/update", (req, res) => {});

//Deletar nota
notesRoute.delete("/delete", (req, res) => {});

export default notesRoute;
