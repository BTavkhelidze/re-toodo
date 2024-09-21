import React from 'react';
import style from './TodoTask.module.scss';

import EmptyTodo from '../emptyTodo/EmptyTodo';
import Todos from '../Todos/Todos';

const TodoTaskContent = ({ tasks, onRemoveTask, toggleComplated }) => {
  return (
    <div className={style.container}>
      {tasks.length > 0 ? (
        <Todos
          tasks={tasks}
          onRemoveTask={onRemoveTask}
          toggleComplated={toggleComplated}
        />
      ) : (
        <EmptyTodo />
      )}
    </div>
  );
};

export default TodoTaskContent;
