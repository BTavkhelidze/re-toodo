import React from 'react';
import style from './EmptyTodo.module.scss';
import task from '../../assets/task.svg';

const EmptyTodo = () => {
  return (
    <div className={style.emptyTodo}>
      <img src={task} alt='task_note_image' />
      <p>You don't have any tasks registered yet</p>
      <p>Create tasks and organize your to-do items</p>
    </div>
  );
};

export default EmptyTodo;
