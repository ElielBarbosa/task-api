import { Request, Response } from "express";
import { UserRepository } from "../repositories/user.repository.js";
import jwt from 'jsonwebtoken';


export class AuthController {
  userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  login = async (req: Request, res: Response) => {
    const { login, senha } = req.body

    const user = await this.userRepository.authUser(login, senha);

    if (!user) {
      res.status(401).json({ mensagem: "Login e senha inválido" });
    }

    const secret = process.env.JWT_SECRET as string;

    const token = jwt.sign(
      {
        userId: user?.id_usuario,
        login: user?.login_usuario,
      },
      secret,
      {
        expiresIn: "1h",
      }
    );
    return res.json({
      token,
    });
  }
}