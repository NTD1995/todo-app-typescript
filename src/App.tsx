import { useState } from 'react';
import { on } from 'stream';
import './App.css';

type Todo = {
  id: number;
  title: string;
  status: string;
  detail: string;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: 'テスト', status: '未着手', detail: 'あ' },
    { id: 2, title: 'テスト', status: '未着手', detail: 'あ' },
    { id: 3, title: 'テスト', status: '未着手', detail: 'あ' },
  ]);
  const [todoTitle, setTodoTitle] = useState('');
  const [todoId, setTodoId] = useState(todos.length + 1);
  const [todoStatus, setTodoStatus] = useState('');
  const [todoDetail, setTodoDetail] = useState('');

  // 入力された値でtitle（todoTitle）を更新する処理
  // eはイベントオブジェクト（eventのe）
  // イベントとは、ユーザーが行う操作（クリック、入力、スクロールなど）のこと
  // イベントオブジェクトはイベントが発生した時の情報が入っている
  // e.target.valueはイベントが発生した要素のvalue（入力された値）を取得する

  // todoを追加する処理
  const handleAddTodo = () => {
    // バリデーション
    // todoTitleが空の場合は何もしない
    if (todoTitle === '') return;

    setTodos([...todos, { id: todoId, title: todoTitle, status: todoStatus, detail: todoDetail }]);

    setTodoId(todoId + 1);
    setTodoId(todoId + 1);
    setTodoTitle('');
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
    setTodoStatus(e.target.value);
  };

  // handleAddTodo関数と同じなので不要
  const onClickAdd = () => {
    if (todoTitle === '') return;
    // ...はスプレッド構文で、配列やオブジェクトを展開する時に使う
    // 例えば、配列の中身を展開して別の配列に代入する時に使う
    // todoIdはは配列ではないので、エラーになっている
    // 修正前
    // const todos = [...todoId, todoTitle, todoDetail, todoStatus];
    // 修正後
    // newTodosは以下のような配列になる
    // [todo1, todo2, todo3, "タイトル", "詳細", "notStarted"]
    const newTodos = [...todos, todoTitle, todoDetail, todoStatus];
    setTodoTitle('');
  };

  return (
    <>
      <div>
        {/* titleの入力フォーム */}
        <label style={{ display: 'block' }} htmlFor="title">
          タイトル
        </label>
        <textarea
          style={{ width: '20em', border: '1px solid #333' }}
          id="title"
          name="title"
          value={todoTitle}
          // 本来は引数を受け取る場合は () => {} の形でないといけないが、onChangeは指定された関数に自動でイベントオブジェクトを渡すため、
          // イベントオブジェクトだけを受け取る場合は関数名のみでOK
          // onChangeイベントを使って、入力された値でtitle（todoTitle）を更新する処理を設定する
        />
        {/* detailの入力フォーム */}
        <label style={{ display: 'block' }} htmlFor="detail">
          詳細
        </label>
        <textarea
          style={{ width: '40em', border: '1px solid #333' }}
          id="detail"
          name="detail"
          value={todoDetail}
          onChange={onChangeTodoDetail}
        />
        {/* statusを選択するためのプルダウン */}
        <select
          value={todoStatus}
          // onChangeイベントを使って、選択された値でstatus（todoStatus）を更新する処理を設定する
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
            <button onClick={() => handleDeleteTodo(todo)}>削除</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
