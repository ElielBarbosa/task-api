import express from "express";
import { TaskController } from "../controllers/task.controller.js";
import { Request, Response } from "express";

export const taskRouter = express.Router();
const taskController = new TaskController();

//Pegar todas as notas
taskRouter.get("/task/:id", taskController.listarTarefas);

//Pegar notas de um usuario
// taskRouter.get("/task/:id", async (req: Request, res: Response) => { });

//Pegar notas por busca
taskRouter.get("/task", (req: Request, res: Response) => { });

//Criar nota
taskRouter.post("/task", taskController.criarNovaTarefa);

//Atualizar nota
taskRouter.put("/task", (req: Request, res: Response) => { });

//Deletar nota
taskRouter.delete("/task", (req: Request, res: Response) => { });

export default taskRouter;
