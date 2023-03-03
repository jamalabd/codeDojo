const express = require("express");
const app = express();
const port = 4000;
const bodyParser = require("body-parser");
const cors = require("cors");

const { MongoClient } = require("mongodb");

const listDatabase = async (client) => {
  const dataBaseList = await client.db().admin().listDatabases();

  console.log("data base list", dataBaseList);
};

const createCollection = async (client) => client.db.createCollection("node_todo");

const createlisting = async (client, newListing) => {};

const main = async () => {
  const URI =
    "mongodb+srv://jamal:Grywol77@nodetodo.iwg7lhz.mongodb.net/?retryWrites=true&w=majority";

  const client = new MongoClient(URI);

  try {
    await client.connect();

    await createCollection(client);

    await listDatabase(client);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
};

main().catch(console.error);

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
