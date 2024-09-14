import React from 'react';
import style from './TodoTask.module.scss';

import EmptyTodo from '../emptyTodo/EmptyTodo';
import Todos from '../Todos/Todos';

const TodoTaskContent = () => {
  const task = true;
  return (
    <div className={style.container}>{task ? <Todos /> : <EmptyTodo />}</div>
  );
};

export default TodoTaskContent;
