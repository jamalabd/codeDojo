const express = require("express");
const app = express();
const port = 4000;
const bodyParser = require("body-parser");
const cors = require("cors");

const { MongoClient } = require("mongodb");
const URI =
  "mongodb+srv://jamal:Grywol77@nodetodo.iwg7lhz.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(URI);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.listen(port, () => {
  console.log(`app listening on port: ${port}`);
});

// const getTodos = async () => {

// };

const createMultipleTodos = () => {};

// const createTodo = async () => {

// };

const main = async () => {
  app.get("/", (req, res) => {
    res.send("Hello my guy");
  });

  try {
    await client.connect();

    app.post("/todo/postTodo", (req, res) => {
      console.log("req.body -----------", req.body);
      client
        .db("nodeTodos")
        .collection("todos")
        .insertOne(req.body)
        .then((res) => res.status(201).json(res))
        .catch((error) => res.status(500).json({ error: "could not add todo" }));
    });

    app.get("/todo/getTodo", async (req, res) => {
      const todos = await client.db("nodeTodos").collection("todos").find().toArray();
      res.send(todos);
    });
  } catch (error) {
    console.error(error);
  } finally {
    // await client.close();
  }
};

main().catch(console.error);
