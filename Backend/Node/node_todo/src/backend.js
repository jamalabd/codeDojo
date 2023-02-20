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

class Guitar {
  constructor(color, stringNumber) {
    this.color = color;
    this.stringNumber = stringNumber;
    this.play = () => console.log("guitar");
  }
}

class Base extends Guitar {
  constructor(color) {
    super(color, 4);
    this.play = () => console.log("Base");
  }
}
class Electric extends Guitar {
  constructor(color, stringNumber) {
    super(color, 6);
  }
}

Electric.prototype.play = () => console.log("elect");

const guitars = [];
guitars[0] = new Guitar("black");
guitars[1] = new Base("green");
guitars[3] = new Electric("red");

guitars[3].play();
