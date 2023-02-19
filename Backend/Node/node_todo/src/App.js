import Todo from "./Todo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className>To-Do List</h1>
      </header>
      <Todo label="todo" size="small" />
    </div>
  );
}

export default App;
