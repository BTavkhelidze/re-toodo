import { useState, useEffect } from 'react';

import './App.css';
import apiRequest from './apiRequest';
import Logo from './components/Logo/Logo';
import AddTodoForm from './components/AddTodo/AddTodoForm';
import TaskMain from './components/TaskMain/TaskMain';

function App() {
  const [tasks, setTasks] = useState([]);

  const getFetch = async () => {
    const url = 'http://localhost:3500/tasks';
    const data = await apiRequest(url);
    setTasks(data);
  };

  useEffect(() => {
    getFetch();
  }, []);

  return (
    <>
      <Logo />
      <AddTodoForm onSetTask={setTasks} tasks={tasks} />
      <TaskMain onSetTask={setTasks} tasks={tasks} />
    </>
  );
}

export default App;
