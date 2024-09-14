import React from 'react';
import style from './TaskMainHeader.module.scss';

const TaskMainHeader = () => {
  return (
    <div className={style.container}>
      <p className={style.taskCreated}>
        Tasks created <span>0</span>
      </p>
      <p className={style.complated}>
        Complated <span>0</span>{' '}
      </p>
    </div>
  );
};

export default TaskMainHeader;
