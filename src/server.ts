
import express from "express";
import "dotenv/config";
import { userRouter } from "./routes/user.routes.js";
import { taskRouter } from "./routes/task.routes.js";
import { authRouter } from "./routes/auth.routes.js";

import cors from "cors";



const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3000;

app.use(userRouter);
app.use(taskRouter);
app.use(authRouter);

app.listen(PORT, (erro) => {
  erro ? console.log(erro) : console.log(`tudo certo`);
});
