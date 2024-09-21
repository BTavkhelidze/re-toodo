import React from 'react';
import AddInput from '../AddInput/AddInput';
import AddButton from '../AddButton/AddButton';
import style from './AddTodo.module.scss';

const AddTodoForm = ({ onSetaddTodo, addTodo, onNewTodoBtn }) => {
  return (
    <form
      className={style.mainContainer}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <AddInput onSetaddTodo={onSetaddTodo} addTodo={addTodo} />

      <AddButton
        onNewTodoBtn={onNewTodoBtn}
        onSetaddTodo={onSetaddTodo}
        addTodo={addTodo}
      />
    </form>
  );
};

export default AddTodoForm;
