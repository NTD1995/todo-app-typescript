import { useState } from "react";
import "./App.css";

type Todo = {
  id: number;
  title: string;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: "テスト" },
    { id: 1, title: "テスト" },
    { id: 1, title: "テスト" },
  ]);
  const [todoTitle, setTodoTitle] = useState("");
  const [todoId, setTodoId] = useState(todos.length + 1);
  const handleAddFormChanges = (e: any) => {
    setTodoTitle(e.target.value);
  };
  const handleAddTodo = () => {
    setTodos([...todos, { title: todoTitle, id: todoId }]);

    setTodoId(todoId + 1);
    setTodoId(todoId + 1);
    setTodoTitle("");
  };
  const handleDeleteTodo = (targetTodo: any) => {
    setTodos(todos.filter((todo: any) => todo !== targetTodo));
  };

  return (
    <>
      <div>
        <input type="text" value={todoTitle} onChange={handleAddFormChanges} />

        <button onClick={handleAddTodo}>作成</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.title}</span>
            <button onClick={() => handleDeleteTodo(todo)}>削除</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
