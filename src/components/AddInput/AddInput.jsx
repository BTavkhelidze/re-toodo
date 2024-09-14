import React from 'react';
import style from './AddInput.module.scss';

const AddInput = () => {
  return (
    <label htmlFor='add-input' className={style.container}>
      <input
        id='add-input'
        className={style.input}
        type='text'
        placeholder='Add a new task'
      />
    </label>
  );
};

export default AddInput;
