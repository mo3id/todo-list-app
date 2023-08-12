import React, { useState } from 'react'
import classes from './TaskCard.module.css'
import { useToDoList } from '../../context/context';


const TaskCard = () => {

  const { tasks, removeTaskFromList, taskDoneHandler, showModal } = useToDoList();

  // className={classes['task-complete']?"":classes['task-complete']}
  const taskList = tasks?.map(task => (
    <li key={task.id} className={classes.task}>
      <div className={classes.taskDetails}>
        <p className={task.isComplete ? classes['task-complete'] : classes['task-notcomplete']}>{task.taskTextTitle}</p>
        <p className={task.isComplete ? classes['task-complete'] : classes['task-notcomplete']}>{task.taskTextdisc}</p>
      </div>
      <div className={classes.btns}>
        <button onClick={() => taskDoneHandler(task.id)} className={classes.done}>Done</button>
        <button taskID={task.id} onClick={showModal} className={classes.delete}>Delete</button>
        {/* <button onClick={() => removeTaskFromList(task.id)} className={classes.delete}>Delete</button> */}
      </div>
    </li>
  ));

  return (
    <section className={classes['task_section']}>
      <ul className={classes.taskList}>
        {taskList}
      </ul>
    </section>
  )
}

export default TaskCard