import React from 'react';
import Todo from '../Todo/Todo';
import style from './Todos.module.scss';
const Todos = () => {
  return (
    <div className={style.container}>
      <Todo>
        <p>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </p>
      </Todo>
      <Todo>
        <p>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </p>
      </Todo>
      <Todo>
        <p>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </p>
      </Todo>
    </div>
  );
};

export default Todos;
