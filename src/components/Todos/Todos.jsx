import React from 'react';
import Todo from '../Todo/Todo';
import style from './Todos.module.scss';
const Todos = ({ tasks, onRemoveTask }) => {
  return (
    <div className={style.container}>
      {tasks.map((task) => {
        return (
          <Todo task={task} onRemoveTask={onRemoveTask}>
            <p className={task.completed ? style.uncomplated : ''}>
              {task.title}
            </p>
            {/* <p>{task.description}</p> */}
          </Todo>
        );
      })}
    </div>
  );
};

export default Todos;
