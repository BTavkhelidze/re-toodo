import React from 'react';
import style from './Taskmain.module.scss';
import TaskMainHeader from '../TaskMainHeader/TaskMainHeader';
import TodoTaskContent from '../TodoTaskContent/TodoTaskContent';

const TaskMain = () => {
  return (
    <div className={style.mainContaine}>
      <div className={style.mainContent}>
        <TaskMainHeader />
        <TodoTaskContent />
      </div>
    </div>
  );
};

export default TaskMain;
