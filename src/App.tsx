import { useState } from "react";
import "./App.css";

type Todo = {
  id: number;
  title: string;
  status: string;
  detail: string;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: "テスト", status: "未着手", detail: "あ" },
    { id: 1, title: "テスト", status: "未着手", detail: "あ" },
    { id: 1, title: "テスト", status: "未着手", detail: "あ" },
  ]);
  const [todoTitle, setTodoTitle] = useState("");
  const [todoId, setTodoId] = useState(todos.length + 1);
  const [todoStatus, setTodoStatus] = useState("");
  const [todoDetail, setTodoDetail] = useState("");
  const handleAddFormChanges = (e: any) => {
    setTodoTitle(e.target.value);
  };
  const handleAddTodo = () => {
    setTodos([
      ...todos,
      { id: todoId, title: todoTitle, status: todoStatus, detail: todoDetail },
    ]);

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
            <span>
              {todo.title} {todo.status} {todo.detail}
            </span>
            <button onClick={() => handleDeleteTodo(todo)}>削除</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
