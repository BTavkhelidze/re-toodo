import { useState, useEffect } from 'react';

import './App.css';
import apiRequest from './apiRequest';
import Logo from './components/Logo/Logo';
import AddTodoForm from './components/AddTodo/AddTodoForm';
import TaskMain from './components/TaskMain/TaskMain';

function App() {
  const [tasks, setTasks] = useState([]);
  const [addTodo, setaddTodo] = useState('');

  const getFetch = async () => {
    const url = 'http://localhost:3500/tasks';
    const data = await apiRequest(url);
    setTasks(data);
  };

  console.log(addTodo);
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
      console.log(data.error);
    } else {
      setTasks((prev) => prev.filter((tasks) => tasks.id !== id));
    }

    // ?setTasks((prev) => prev.filter((tasks) => tasks.id !== id));
  };

  const newTodo = async () => {
    if (addTodo.trim() === '') {
      return; // Do nothing if input is empty
    }
    const url = `http://localhost:3500/tasks`;
    const newPizza = {
      title: addTodo,

      completed: false,
    };
    const options = {
      method: 'POST',
      header: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newPizza),
    };

    const data = await apiRequest(url, options);

    if (data.error) {
      console.log(data.error);
    } else {
      setTasks((prev) => [...prev, data]);
      setaddTodo('');
    }
  };

  const toggleComplated = async (id) => {
    const url = `http://localhost:3500/tasks/${id}`;
    const option = {
      method: 'POST',
      header: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        // completed: !tasks.find((task) => task.id === id).completed,
        completed: !tasks.completed,
      }),
    };

    const data = await apiRequest(url, option);
    if (data.error) {
      console.log(data.error);
    } else {
      setTasks((prev) =>
        prev.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        )
      );
    }
  };

  useEffect(() => {
    getFetch();
  }, []);

  return (
    <>
      <Logo />
      <AddTodoForm
        onSetTask={setTasks}
        tasks={tasks}
        onSetaddTodo={setaddTodo}
        addTodo={addTodo}
        onNewTodoBtn={newTodo}
      />
      <TaskMain
        onRemoveTask={removeTask}
        tasks={tasks}
        toggleComplated={toggleComplated}
      />
    </>
  );
}

export default App;
