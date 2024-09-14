import React from 'react';
import AddInput from '../AddInput/AddInput';
import AddButton from '../AddButton/AddButton';
import style from './AddTodo.module.scss';

const AddTodoForm = () => {
  return (
    <form
      className={style.mainContainer}
      onSubmit={(e) => {
        e.preventDefault();
        console.log(';hello');
      }}
    >
      <AddInput />

      <AddButton />
    </form>
  );
};

export default AddTodoForm;
