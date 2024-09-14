import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Logo from './components/Logo/Logo';
import AddTodoForm from './components/AddTodo/AddTodoForm';
import TaskMain from './components/TaskMain/TaskMain';

function App() {
  return (
    <>
      <Logo />
      <AddTodoForm />
      <TaskMain />
    </>
  );
}

export default App;
