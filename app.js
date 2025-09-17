import { sequelize } from "./config/database.js";
import express from "express";
import notesRoute from "./app/routes/note.routes.js";
import usersRouter from "./app/routes/user.routes.js";
import { User } from "./app/models/user.js";
import { Note } from "./app/models/note.js";

const app = express();
app.use(express.json());

const PORT = 3000;

app.use("/user", usersRouter);
app.use("/note", notesRoute);

app.listen(PORT, (erro) => {
  erro ? console.log(erro) : console.log(`tudo certo`);
});
// (async () => {
//   const users = await User.findAll();
//   const notes = await Note.findAll();
//   console.log(users.map((u) => u.toJSON())); // mostra em JSON
//   console.log(notes.map((u) => u.toJSON())); // mostra em JSON
// })();
