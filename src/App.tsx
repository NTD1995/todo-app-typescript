import { useState } from "react";
import "./App.css";

type Todo = {
  id: number;
  task: string;
  completed: boolean;
};

function App() {
  // const [todos, setTodos] = useState<Todo[]>([]);
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");
  const [todoId, setTodoId] = useState(todos.length + 1);
  const handleAddFormChanges = (e) => {
    setTodoTitle(e.target.value);
  };
  const handleAddTodo = () => {
    setTodos([...todos, { id: todoId, title: todoTitle }]);
    setTodoId(todoId + 1);
    setTodoTitle("");
  };
  const handleDeleteTodo = (targetTodo) => {
    setTodos(todos.filter((todo) => todo !== targetTodo));
  };

  return (
    <>
      <div>
        <input type="text" value={todoTitle} onChange={handleAddFormChanges} />

        <button onClick={handleAddTodo}>作成</button>
      </div>
    </>
  );
}

export default App;
