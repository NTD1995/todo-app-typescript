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
  const [isEditable, setIsEditable] = useState(false)
  const [detailId, setDetailId] = useState("")

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

    const handleOpenDetailForm = () => {
    setTodoDetail(true)
    setDetailId(todo.id)
  }

  const handleCloseDetailForm = () => {
    setTodoDetail(false)
    setDetailId(todo.id)

  return (
    <>
          {isEditable ? (
      <div>
        <input type="text" value={todoTitle} onChange={handleAddFormChanges} />

        <button onClick={handleAddTodo}>作成</button>
        <button>詳細を保存</button>
        <button onClick={handleCloseDetailForm}>キャンセル</button>
      </div>
       ) : (
               )}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>
              {todo.title} {todo.status} {todo.detail}
            </span>
              <select value={todo.status}>
              <option value="notStarted">未着手</option>
              <option value="inProgress">作業中</option>
              <option value="done">完了</option>
            </select>
            <button onClick={handleOpenDetailForm}>詳細</button>
            <button onClick={() => handleDeleteTodo(todo)}>削除</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
