import { Tarefa } from "../entities/ITarefa.js";
import { prisma } from "../prisma.js";

export class TarefaRepository {
  constructor() { }

  async listarTarefas(): Promise<Tarefa[] | null> {
    const rows = await prisma.$queryRaw`
    select * from tb_tarefa;
    `as Tarefa[]

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