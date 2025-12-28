import { Task } from "../entities/ITask.js";
import { prisma } from "../prisma.js";

export class TaskRepository {
  constructor() { }

  async listTask(id_user: number): Promise<Task[] | null> {
    const rows = await prisma.$queryRaw`
    select id_tarefa,titulo_tarefa from tb_tarefa where id_usuario = ${id_user};
    `as Task[]

    return rows;
  }

  async verTarefaId(id_task: number): Promise<Task[] | null> {
    const rows = await prisma.$queryRaw`
    select id_tarefa,titulo_tarefa, descricao_tarefa from tb_tarefa where id_tarefa = ${id_task};
    `as Task[]

    return rows;
  }

  async criarTarefa(id_usuario: number, titulo: string, descricao: string): Promise<void> {

    await prisma.$executeRaw`
      insert into tb_tarefa(
		    id_tarefa,
        titulo_tarefa, 
        descricao_tarefa
		  ) values (
		    ${id_usuario},
        ${titulo},
        ${descricao}
        );
    `;
  }

  async deletarTarefa(id_task: number): Promise<void> {
    await prisma.$executeRaw`
      delete from tb_tarefa where id_tarefa = ${id_task};

    `;
  }

}