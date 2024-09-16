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

  const removeTask = async (id) => {
    const url = `http://localhost:3500/tasks/${id}`;
    const options = {
      method: 'DELETE',
      header: {
        'Content-type': 'application/json',
      },
    };
    const data = await apiRequest(url, options);
    if (data.error) {
      console.error(data.error);
    } else {
      setTasks((prev) => prev.filter((tasks) => tasks.id !== id));
    }

    // ?setTasks((prev) => prev.filter((tasks) => tasks.id !== id));
  };

  useEffect(() => {
    getFetch();
  }, []);

  return (
    <>
      <Logo />
      <AddTodoForm onSetTask={setTasks} tasks={tasks} />
      <TaskMain onRemoveTask={removeTask} tasks={tasks} />
    </>
  );
}

export default App;
