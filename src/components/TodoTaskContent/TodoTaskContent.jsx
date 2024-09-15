import React from 'react';
import style from './TodoTask.module.scss';

import EmptyTodo from '../emptyTodo/EmptyTodo';
import Todos from '../Todos/Todos';

const TodoTaskContent = ({ tasks, onSetTask }) => {
  const task = true;

  return (
    <div className={style.container}>
      {task ? <Todos tasks={tasks} onSetTask={onSetTask} /> : <EmptyTodo />}
    </div>
  );
};

export default TodoTaskContent;
