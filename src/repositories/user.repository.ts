import { User } from "../entities/IUser.js";
import { prisma } from "../prisma.js";

export class UserRepository {
  constructor() { }

  async loginUsuario(login: string, senha: string): Promise<User | null> {
    const rows = await prisma.$queryRaw`
    select id_usuario, nome_usuario, login_usuario, senha_usuario from tb_tarefa where login_usuario = ${login} and senha_usuario = ${senha};
    `as User[]

    if (rows.length === 0) {
      return null;
    }

    return rows[0];
  }

  async registrarNovoUsuario(nome: string, login: string, senha: string): Promise<void> {

    await prisma.$executeRaw`
      insert into tb_usuario(
        nome_usuario,
        login_usuario,
        senha_usuario) values(
        ${nome},
        ${login},
        ${senha}
      );
    `;
  }

  async authUser(login: string, senha: string): Promise<User | null> {

    const rows = await prisma.$queryRaw`
            SELECT id_usuario,login_usuario,senha_usuario FROM tb_usuario
            WHERE login_usuario = ${login} and senha_usuario = ${senha}
        ` as User[]

    if (rows.length === 0) {
      return null
    }

    return rows[0];

  }

}