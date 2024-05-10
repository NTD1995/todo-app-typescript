import { useState } from 'react';
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
  const [isEditable, setIsEditable] = useState(false);
  // 課題4
  // 編集対象のtodoのidを保持するstate（editId）を作成する
  // todoのidは数値なので、型はnumberにする
  // この下の定義を修正してください
  const [editId, setEditId] = useState('');
  // 編集用のタイトルの入力フォームの入力値を保持するstate（newTitle）
  const [newTitle, setNewTitle] = useState('');
  // 課題3
  // 編集用の詳細の入力フォームの入力値を保持するstate（newDetail）
  // この下の定義を修正してください
  const [newDetail, setNewDetail] = useState('');
  // 課題3
  // 編集用のステータスのプルダウンの入力値を保持するstate（newStatus）
  // この下の定義を修正してください
  const [newStatus, setNewStatus] = useState('');

  // eはイベントオブジェクト（eventのe）
  // イベントとは、ユーザーが行う操作（クリック、入力、スクロールなど）のこと
  // イベントオブジェクトはイベントが発生した時の情報が入っている
  // e.target.valueはイベントが発生した要素のvalue（入力された値）を取得する

  // 入力された値でtitle（todoTitle）を更新する処理
  const onChangeTodoTitle = (e: any) => {
    setTodoTitle(e.target.value);
  };

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
    setTodoStatus(e.target);
  };

  // 編集フォームを開く処理
  const handleOpenEditForm = (todo: any) => {
    // 編集フォームを開く
    setIsEditable(true);
    // 編集対象のtodoのidをセットする
    setEditId(todo.id);
    // 編集用のタイトルの入力フォームに編集対象のtodoのtitleの値をセットする
    setNewTitle(todo.title);
    // 課題5
    // 編集用の詳細の入力フォームに編集対象のtodoのdetailの値をセットする
    // この下に処理を記述してください

    // 課題5
    // 編集用のステータスのプルダウンに編集対象のtodoのstatusの値をセットする
    // この下に処理を記述してください
  };

  // 編集用のタイトルの入力フォームの入力値を更新する処理
  const handleEditTitleChange = (e: any) => {
    setNewTitle(e.target.value);
  };

  // 課題3
  // 編集用の詳細の入力フォームの入力値を更新する処理
  // この下に処理を記述してください

  // 課題3
  // 編集用のステータスのプルダウンの入力値を更新する処理
  // この下に処理を記述してください

  // 編集フォームを閉じる処理
  const handleCloseEditForm = () => {
    // 編集フォームを閉じる
    setIsEditable(false);
    // 編集対象のtodoのidをリセットする
    setEditId('');
    // 課題5
    // 編集用のタイトルの入力フォームをリセットする
    // この下に処理を記述してください

    // 課題5
    // 編集用の詳細の入力フォームをリセットする
    // この下に処理を記述してください

    // 課題5
    // 編集用のステータスのプルダウンをリセットする
    // この下に処理を記述してください
  };

  // todoを編集する処理
  const handleEditTodo = () => {
    // 課題4
    // 編集対象のtodoを入力されたtitle、detail、statusで更新した新しい配列（newArray）を作成する
    // mapメソッドを使って、編集対象のtodoのid（editId）とidが一致するtodoのtitle、detail、statusを更新する
    // この下の処理を修正してください
    // const newArray = todos.map((todo) => (todo.id === editId ? { ...todo, title: newTitle } : todo));
    // todosをnewArrayで更新する
    // setTodos(newArray);

    // 編集対象のtodoのidをリセットする
    setEditId('');
    // 入力されたタイトルをリセットする
    setNewTitle('');
    // 課題5
    // 入力された詳細をリセットする
    // この下に処理を記述してください

    // 課題5
    // 入力されたステータスをリセットする
    // この下に処理を記述してください

    // 課題4
    // 編集フォームを閉じる
    // この下の処理を修正してください
    // handleCloseEditForm('');
  };

  return (
    <>
      {/* todoを新規追加するためのフォーム */}
      <div>
        {/* タイトルの入力フォーム */}
        <label style={{ display: 'block' }} htmlFor="title">
          タイトル
        </label>
        <textarea
          style={{ width: '20em', border: '1px solid #333' }}
          id="title"
          name="title"
          value={todoTitle}
          onChange={onChangeTodoTitle}
        />
        <button onClick={handleEditTodo}>編集を保存</button>
        <button onClick={handleCloseEditForm}>キャンセル</button>
        {/* 詳細の入力フォーム */}
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
        <button onClick={handleEditTodo}>編集を保存</button>
        <button onClick={handleCloseEditForm}>キャンセル</button>
        {/* ステータスを選択するためのプルダウン */}
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
            {/* 課題2 */}
            {/* 編集ボタンを押すとtodoを編集するためのフォームが開くようにする */}
            {/* 現在は編集ボタンを押すとtodoが削除されてしまうので、修正してください */}
            <button onClick={() => handleOpenEditForm(todo)}>編集</button>
            <button onClick={() => handleDeleteTodo(todo)}>削除</button>
          </li>
        ))}
      </ul>
      {/* todoを編集するためのフォーム */}
      {/* 課題2 */}
      {/* todoを編集するためのフォームの表示を切り替えることができように設定する */}
      {/* この下のdivタグが編集ボタンを押すことで現れるようにしてください */}
      {/* 課題3 */}
      {/* 作成したフォームやプルダウンにステートを更新する処理を追加する */}
      {/* 課題4 */}
      {/* 編集を保存するボタンを押すと、todoを編集する処理を追加する */}
      {/* 課題4 */}
      {/* キャンセルするボタンを押すと、編集フォームを閉じる処理を追加する */}
      {/* 条件式 ? 真の時 : 偽の時 */}
      {/* isEditable === true ? true : 偽の時 */}
      {isEditable === true ? (
        <div>
          <label style={{ display: 'block' }} htmlFor="title">
            タイトル
          </label>
          {/* 課題1 */}
          {/* 編集用のタイトルの入力フォーム */}
          {/* この下に書いてください */}
          <textarea
            style={{ width: '20em', border: '1px solid #333' }}
            id="title"
            name="title"
            value={newTitle}
            onChange={handleEditTitleChange}
          />
          {/* 課題1 */}
          {/* 編集用の詳細の入力フォーム */}
          {/* この下に書いてください */}
          <textarea style={{ width: '20em', border: '1px solid #333' }} id="detail" name="detail" value={newDetail} />
          {/* 課題1 */}
          {/* 編集用のステータスのプルダウン */}
          {/* この下に書いてください */}
          <select>
            <option value="all">すべて</option>
            <option value="notStarted">未着手</option>
            <option value="inProgress">作業中</option>
            <option value="done">完了</option>
          </select>
          {/* 課題1 */}
          {/* 編集を保存するボタン */}
          {/* この下に書いてください */}
          <button>編集を保存</button>
          {/* 課題1 */}
          {/* キャンセルするボタン */}
          {/* この下に書いてください */}
          <button>キャンセル</button>
        </div>
      ) : null}
    </>
  );
}

export default App;
