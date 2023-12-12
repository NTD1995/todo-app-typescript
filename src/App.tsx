import { useState } from "react";
import "./App.css";

type Todo = {
  id: number;
  task: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  let title: stiring;
  title = 2;

  return (
    <div className="App">
      <h1>- Todoアプリ -</h1>
    </div>
  );
}

export default App;
