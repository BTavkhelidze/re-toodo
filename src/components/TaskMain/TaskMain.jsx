import React, { useState } from 'react';
import style from './Taskmain.module.scss';
import TaskMainHeader from '../TaskMainHeader/TaskMainHeader';
import TodoTaskContent from '../TodoTaskContent/TodoTaskContent';

const TaskMain = (onSetTask, task) => {
  const [complated, setComplated] = useState(null);

  return (
    <div className={style.mainContaine}>
      <div className={style.mainContent}>
        <TaskMainHeader complated={complated} />
        <TodoTaskContent complated={complated} onSetComplated={setComplated} />
      </div>
    </div>
  );
};

export default TaskMain;
