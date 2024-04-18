import { useState } from "react";
import { on } from "stream";
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
    { id: 2, title: "テスト", status: "未着手", detail: "あ" },
    { id: 3, title: "テスト", status: "未着手", detail: "あ" },
  ]);
  const [todoTitle, setTodoTitle] = useState("");
  const [todoId, setTodoId] = useState(todos.length + 1);
  const [todoStatus, setTodoStatus] = useState("");
  const [todoDetail, setTodoDetail] = useState("");
  const [isEditable, setIsEditable] = useState(false)
  const [editId, setEditId] = useState("")
  const [newTitle, setNewTitle] = useState("")

  // 入力された値でtitle（todoTitle）を更新する処理
  const onChangeTodoTitle = (e: any) => {
    setTodoTitle(e.target.value);
  };
  // eはイベントオブジェクト（eventのe）
  // イベントとは、ユーザーが行う操作（クリック、入力、スクロールなど）のこと
  // イベントオブジェクトはイベントが発生した時の情報が入っている
  // e.target.valueはイベントが発生した要素のvalue（入力された値）を取得する

  // todoを追加する処理
  const handleAddTodo = () => {
    // バリデーション
    // todoTitleが空の場合は何もしない
    if (todoTitle === "") return;

    setTodos([
      ...todos,
      { id: todoId, title: todoTitle, status: todoStatus, detail: todoDetail },
    ]);

    setTodoId(todoId + 1);
    setTodoId(todoId + 1);
    setTodoTitle("");
  };

  // todoを削除する処理
  const handleDeleteTodo = (targetTodo: any) => {
    setTodos(todos.filter((todo: any) => todo !== targetTodo));
  };

  // 入力された値でdetail（todoDetail）を更新する処理
  const onChangeTodoDetail = (e: any) => {
    setTodoDetail(e.target.value);
  };
  // 選択された値でstatus（todoStatus）を更新する処理
  const onChangeTodoStatus = (e: any) => {
    setTodoStatus(e.target);
  };

     const handleOpenEditForm = (todo) => {
    setIsEditable(true)
    setEditId(todo.id)
    setNewTitle(todo.title)
  }

    const handleEditFormChange = (e) => {
    setNewTitle(e.target.value)
  }

  const handleCloseEditForm = () => {
    setIsEditable(false)
    setEditId('')
  }

   const handleEditTodo = () => {
    const newArray = todos.map((todo) =>
      todo.id === editId ? { ...todo, title: newTitle } : todo
    )
    setTodos(newArray)
    setEditId('')

    setNewTitle('')
    handleCloseEditForm('')

  return (
    <>
      <div>
        {/* titleの入力フォーム */}
        <label style={{ display: "block" }} htmlFor="title">
          タイトル
        </label>
        <textarea
          style={{ width: "20em", border: "1px solid #333" }}
          id="title"
          name="title"
          value={todoTitle}
           onChange={handleEditFormChange}
          />
          <button onClick={handleEditTodo}>編集を保存</button>
          <button onClick={handleCloseEditForm}>キャンセル</button>
          // 本来は引数を受け取る場合は () => {} の形でないといけないが、onChangeは指定された関数に自動でイベントオブジェクトを渡すため、
          // イベントオブジェクトだけを受け取る場合は関数名のみでOK
          // onChangeイベントを使って、入力された値でtitle（todoTitle）を更新する処理を設定する
          onChange={onChangeTodoTitle}
        />
        {/* detailの入力フォーム */}
        <label style={{ display: "block" }} htmlFor="detail">
          詳細
        </label>
        <textarea
          style={{ width: "40em", border: "1px solid #333" }}
          id="detail"
          name="detail"
          value={todoDetail}
          onChange={onChangeTodoDetail}
          onChange={handleEditFormChanges}
          />
          <button onClick={handleEditTodo}>編集を保存</button>
          <button onClick={handleCloseEditForm}>キャンセル</button>
        />
        {/* statusを選択するためのプルダウン */}
        <select
          value={todoStatus}
          // onChangeイベントを使って、選択された値でstatus（todoStatus）を更新する処理を設定する
          onChange={onChangeTodoStatus}
        >
          <option value="notStarted">未着手</option>
          <option value="inProgress">作業中</option>
          <option value="done">完了</option>
        </select>
        <button onClick={handleAddTodo}>作成</button>
      </div>
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
            <button onClick={() => handleDeleteTodo(todo)}>編集</button>
            <button onClick={() => handleDeleteTodo(todo)}>削除</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
