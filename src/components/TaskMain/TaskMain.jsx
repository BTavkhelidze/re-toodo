import React, { useState } from 'react';
import style from './Taskmain.module.scss';
import TaskMainHeader from '../TaskMainHeader/TaskMainHeader';
import TodoTaskContent from '../TodoTaskContent/TodoTaskContent';

const TaskMain = ({ onRemoveTask, tasks }) => {
  return (
    <div className={style.mainContaine}>
      <div className={style.mainContent}>
        <TaskMainHeader />
        <TodoTaskContent onRemoveTask={onRemoveTask} tasks={tasks} />
      </div>
    </div>
  );
};

export default TaskMain;
