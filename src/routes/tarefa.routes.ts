import express from "express";
import { TarefaController } from "../controllers/tarefa.controller.js";

export const tarefaRouter = express.Router();
const tarefaController = new TarefaController();

//Pegar todas as notas
tarefaRouter.get("/listarTarefas", tarefaController.listarTarefas);
//Pegar notas de um usuario
tarefaRouter.get("/index", async (req, res) => { });
//Pegar notas por busca
tarefaRouter.get("/search", (req, res) => { });

//Criar nota
tarefaRouter.post("/criarTarefa", tarefaController.criarNovaTarefa);

//Atualizar nota
tarefaRouter.put("/update", (req, res) => { });

//Deletar nota
tarefaRouter.delete("/delete", (req, res) => { });

export default tarefaRouter;
