import { Request, Response } from "express"
import { TarefaRepository } from "../repositories/tarefa.respository.js";

export class TarefaController {
  tarefaRepository: TarefaRepository;

  constructor() {
    this.tarefaRepository = new TarefaRepository();
  }

  listarTarefas = async (req: Request, res: Response) => {
    const tarefas = await this.tarefaRepository.listarTarefas();

    res.json(tarefas).status(200);
  }

  criarNovaTarefa = async (req: Request, res: Response) => {
    const { titulo, descricao } = req.body;

    await this.tarefaRepository.criarTarefa(titulo, descricao);

    res.json().status(201)

  }
}