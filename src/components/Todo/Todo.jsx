import React from 'react';
import style from './Todo.module.scss';
import complated from '../../assets/complated.svg';
import uncomplated from '../../assets/uncomplated.svg';
import delate from '../../assets/delate.svg';
const Todo = ({ children }) => {
  return (
    <div className={style.container}>
      <img src={complated} alt='' />
      {children}
      <img src={delate} alt='' />
    </div>
  );
};

export default Todo;
