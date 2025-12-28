
import express from "express";
import { userRouter } from "./routes/user.routes.js";
import { taskRouter } from "./routes/task.routes.js";



const app = express();
app.use(express.json());

const PORT = 3000;

app.use(userRouter);
app.use(taskRouter);

app.listen(PORT, (erro) => {
  erro ? console.log(erro) : console.log(`tudo certo`);
});
