import express from "express";
import { TaskController } from "../controllers/task.controller.js";
import { Request, Response } from "express";
import { authenticateUser } from "../middlewares/autheticate.middleware.js";

export const taskRouter = express.Router();
const taskController = new TaskController();

//Pegar todas as notas
taskRouter.get("/task", authenticateUser, taskController.listarTarefas);

//Pegar notas de um usuario
taskRouter.get("/task/verDetalhes/:id", authenticateUser, taskController.verDetalhesTarefas);

//Pegar notas por busca
//taskRouter.get("/task", (req: Request, res: Response) => { });

//Criar nota
taskRouter.post("/task", authenticateUser, taskController.criarNovaTarefa);

//Atualizar nota
//taskRouter.put("/task", (req: Request, res: Response) => { });

//Deletar nota
taskRouter.delete("/task/:id", authenticateUser, taskController.deletarTarefa);

export default taskRouter;
