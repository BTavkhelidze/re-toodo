import React, { useState } from 'react';
import style from './Taskmain.module.scss';
import TaskMainHeader from '../TaskMainHeader/TaskMainHeader';
import TodoTaskContent from '../TodoTaskContent/TodoTaskContent';

const TaskMain = ({ onRemoveTask, tasks, toggleComplated }) => {
  return (
    <div className={style.mainContaine}>
      <div className={style.mainContent}>
        <TaskMainHeader tasks={tasks} />
        <TodoTaskContent
          onRemoveTask={onRemoveTask}
          tasks={tasks}
          toggleComplated={toggleComplated}
        />
      </div>
    </div>
  );
};

export default TaskMain;
