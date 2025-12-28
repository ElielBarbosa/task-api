import { Request, Response } from "express"
import { TaskRepository } from "../repositories/task.respository.js";

export class TaskController {
  tarefaRepository: TaskRepository;

  constructor() {
    this.tarefaRepository = new TaskRepository();
  }

  listarTarefas = async (req: Request, res: Response) => {
    const id_user = Number(req.params.id);

    const tarefas = await this.tarefaRepository.listTask(id_user);

    res.json(tarefas).status(200);
  }

  verDetalhesTarefas = async (req: Request, res: Response) => {
    const id_task = Number(req.params.id);

    const tarefas = await this.tarefaRepository.verTarefaId(id_task);

    res.json(tarefas).status(200);
  }

  criarNovaTarefa = async (req: Request, res: Response) => {
    const { id_usuario, titulo, descricao } = req.body;

    await this.tarefaRepository.criarTarefa(id_usuario, titulo, descricao);

    res.json().status(201)

  }

  deletarTarefa = async (req: Request, res: Response) => {
    const id_task = Number(req.params.id);

    await this.tarefaRepository.deletarTarefa(id_task);

    res.json({ mesage: 'Tarefa Deletada' }).status(201)
  }
}