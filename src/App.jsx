import { useState, useEffect } from 'react';

import './App.css';
import apiRequest from './apiRequest';
import Logo from './components/Logo/Logo';
import AddTodoForm from './components/AddTodo/AddTodoForm';
import TaskMain from './components/TaskMain/TaskMain';

function App() {
  const [task, setTask] = useState([]);

  return (
    <>
      <Logo />
      <AddTodoForm onSetTask={setTask} task={task} />
      <TaskMain onSetTask={setTask} task={task} />
    </>
  );
}

export default App;
