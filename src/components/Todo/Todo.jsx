import React from 'react';
import style from './Todo.module.scss';
import complated from '../../assets/complated.svg';
import uncomplated from '../../assets/uncomplated.svg';
import delate from '../../assets/delate.svg';
const Todo = ({ children, task, onRemoveTask }) => {
  console.log(task);

  return (
    <div className={style.container}>
      <div>
        {task.completed ? (
          <img src={complated} alt='' />
        ) : (
          <img src={uncomplated} alt='' />
        )}
      </div>
      {children}
      <img
        src={delate}
        alt=''
        onClick={() => {
          onRemoveTask(task.id);
        }}
      />
    </div>
  );
};

export default Todo;
