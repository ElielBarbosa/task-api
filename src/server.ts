
import express from "express";
import usersRouter from "./routes/user.routes.js";
import tarefaRouter from "./routes/tarefa.routes.js";



const app = express();
app.use(express.json());

const PORT = 3000;

app.use(tarefaRouter);

app.listen(PORT, (erro) => {
  erro ? console.log(erro) : console.log(`tudo certo`);
});
