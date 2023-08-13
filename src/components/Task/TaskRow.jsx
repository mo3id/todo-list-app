import React from 'react'
import classes from './Task.module.css'
import { useToDoList } from '../../context/context';

const Task = () => {
  const { tasks, removeTaskFromList, taskDoneHandler, showModal } = useToDoList();
  return (
    <div className={classes.task}>
      <div className={classes.taskDetails}>
        <p className={task.isComplete ? classes['task-complete'] : classes['task-notcomplete']}>{task.taskTextTitle}</p>
        <p className={task.isComplete ? classes['task-complete'] : classes['task-notcomplete']}>{task.taskTextdisc}</p>
      </div>
      <div className={classes.btns}>
        <button onClick={() => taskDoneHandler(task.id)} className={classes.done}>Done</button>
        <button taskID={task.id} onClick={showModal} className={classes.delete}>Delete</button>
        {/* <button onClick={() => removeTaskFromList(task.id)} className={classes.delete}>Delete</button> */}
      </div>
    </div>
  )
}

export default Task