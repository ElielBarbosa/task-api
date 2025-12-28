import { Task } from "../entities/ITask.js";
import { prisma } from "../prisma.js";

export class TaskRepository {
  constructor() { }

  async listTask(id_user: number): Promise<Task[] | null> {
    const rows = await prisma.$queryRaw`
    select * from tb_tarefa where id_usuario = ${id_user};
    `as Task[]

    return rows;
  }

  async criarTarefa(id_usuario: number, titulo: string, descricao: string): Promise<void> {

    await prisma.$executeRaw`
      insert into tb_tarefa(
		    id_usuario,
        titulo_tarefa, 
        descricao_tarefa
		  ) values (
		    ${id_usuario},
        ${titulo},
        ${descricao}
        );
    `;
  }

}