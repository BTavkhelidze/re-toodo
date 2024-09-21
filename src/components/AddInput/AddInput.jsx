import React from 'react';
import style from './AddInput.module.scss';

const AddInput = ({ onSetaddTodo, addTodo }) => {
  return (
    <label htmlFor='add-input' className={style.container}>
      <input
        id='add-input'
        className={style.input}
        type='text'
        value={addTodo}
        placeholder='Add a new task'
        onChange={(e) => onSetaddTodo(e.target.value)}
      />
    </label>
  );
};

export default AddInput;
