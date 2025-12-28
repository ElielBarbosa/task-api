import { Request, Response } from "express"
import { UserRepository } from "../repositories/user.repository.js";
export class UserController {
  tarefaRepository: UserRepository;

  constructor() {
    this.tarefaRepository = new UserRepository();
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