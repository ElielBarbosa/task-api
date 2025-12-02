
import express from "express";
import usersRouter from "./routes/user.routes.js";
import notesRoute from "./routes/note.routes.js";



const app = express();
app.use(express.json());

const PORT = 3000;

app.use("/user", usersRouter);
app.use("/note", notesRoute);

app.listen(PORT, (erro) => {
  erro ? console.log(erro) : console.log(`tudo certo`);
});
