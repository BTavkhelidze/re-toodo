import React from 'react';
import style from './Todo.module.scss';
import complated from '../../assets/complated.svg';
import uncomplated from '../../assets/uncomplated.svg';
import delate from '../../assets/delate.svg';
const Todo = ({ children, task, onSetTask }) => {
  console.log(task);

  return (
    <div className={style.container}>
      <div
        onClick={() => {
          let id = task.id;
          onSetTask((prevTasks) => {
            prevTasks.map((el) => {
              if (el.id === id) {
                return { ...el, completed: !el.completed };
              }
              return el;
            });
          });
        }}
      >
        {task.completed ? (
          <img src={complated} alt='' />
        ) : (
          <img src={uncomplated} alt='' />
        )}
      </div>
      {children}
      <img src={delate} alt='' />
    </div>
  );
};

export default Todo;
