import { useState } from 'react';
import './App.css';

type Todo = {
  id: number;
  task: string;
  completed: boolean;
};

function App() {
  // const [todos, setTodos] = useState<Todo[]>([]);

  const todos: Todo[] = [
    {
      id: 1,
      task: '掃除',
      completed: false,
    },
    {
      id: 2,
      task: '洗濯',
      completed: true,
    },
  ];

  return (
    <div className="App">
      <h1>- Todoアプリ -</h1>
    </div>
  );
}

export default App;
