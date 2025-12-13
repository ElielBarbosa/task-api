import { Request, Response, NextFunction } from "express";


export class ValidarTarefas {

  validarNovaTarefa = (req: Request, res: Response, next: NextFunction) => {
    const { titulo } = req.body;

    if (titulo === undefined || titulo === "" || titulo === " ") {
      res.json({ message: "Erro, titulo não pode ser vazio" });
    }

    next();
  }
}