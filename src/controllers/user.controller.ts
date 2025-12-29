import { Request, Response } from "express"
import { UserRepository } from "../repositories/user.repository.js";
export class UserController {
  userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  cadastrarUsuario = async (req: Request, res: Response) => {
    const { nome, login, senha } = req.body;

    this.userRepository.registrarNovoUsuario(nome, login, senha);


    res.json({ mensage: `Usuario ${nome} registrado` }).status(200);
  }
}