import React from 'react';
import style from './TaskMainHeader.module.scss';

const TaskMainHeader = ({ tasks }) => {
  const completed = tasks.filter((task) => task.completed === true);
  console.log(tasks);
  console.log(completed);

  return (
    <div className={style.container}>
      <p className={style.taskCreated}>
        Tasks created <span>{tasks.length}</span>
      </p>
      <p className={style.complated}>
        Complated <span>{completed.length}</span>{' '}
      </p>
    </div>
  );
};

export default TaskMainHeader;
