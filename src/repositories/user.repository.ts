import { User } from "../entities/IUser.js";
import { prisma } from "../prisma.js";

export class UserRepository {
  constructor() { }

  async listarTarefas(): Promise<User[] | null> {
    const rows = await prisma.$queryRaw`
    select * from tb_tarefa;
    `as User[]

    return rows;
  }

  async criarTarefa(titulo: string, descricao: string): Promise<void> {

    await prisma.$executeRaw`
      insert into tb_tarefa(
        titulo_tarefa,
        descricao_tarefa) values(
        ${titulo},
        ${descricao}
      );
    `;
  }

}