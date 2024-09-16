import React from 'react';
import style from './TodoTask.module.scss';

import EmptyTodo from '../emptyTodo/EmptyTodo';
import Todos from '../Todos/Todos';

const TodoTaskContent = ({ tasks, onRemoveTask }) => {
  const task = true;

  return (
    <div className={style.container}>
      {task ? (
        <Todos tasks={tasks} onRemoveTask={onRemoveTask} />
      ) : (
        <EmptyTodo />
      )}
    </div>
  );
};

export default TodoTaskContent;
