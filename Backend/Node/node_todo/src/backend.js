const express = require("express");
const app = express();
const port = 4000;
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const getRandom = (max) => Math.floor(Math.random() * max);

let todolist = {
  data: [
    { title: "Home", text: "Take out trash", id: getRandom(20) },
    { title: "Work", text: "Review meeting notes", id: getRandom(20) },
  ],
};

app.get("/", (req, res) => {
  res.send("Hello my guy");
});

app.get("/todo/getTodo", (req, res) => {
  res.send(todolist);
});

app.post("/todo/postTodo", (req, res) => {
  todolist.data = req.body;
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`app listening on port: ${port}`);
});
