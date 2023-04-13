import React, { useState, useEffect } from "react";

const TodoItem = ({ todo }) => {
  return todo.map((e, index) => (
    <div key={`${index}-key`}>
      <h3>{e.title}</h3>
      <p>{e.text}</p>
    </div>
  ));
};

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTodo((prev) => [...prev, { title, text }]);
    console.log("post", todo);
    fetch("http://localhost:4000/todo/postTodo", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    });
  };

  useEffect(() => {
    const getTodo = async () => {
      const response = await fetch("http://localhost:4000/todo/getTodo");
      const data = await response.json();
      setTodo(data);
      console.log("data", data);
    };

    getTodo();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        ></input>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Todo"
        ></input>
        <button type="submit">Submit</button>
      </form>
      <TodoItem todo={todo} />
    </>
  );
};

export default Todo;
