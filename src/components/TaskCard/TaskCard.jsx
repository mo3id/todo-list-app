import React, { useEffect, useState } from 'react'
import classes from './TaskCard.module.css'
import { useToDoList } from '../../context/context';
import Modal from '../Modal/Modal';
import InputField from '../InputField/InputField';


const TaskCard = () => {

  const { tasks, removeTaskFromList, taskDoneHandler, showModal, modalToRemoveIsShow, modalToEditIsShow, selectedTask, hideModal, hideEditModal, showEditModal, EditTask, getSelectdTask } = useToDoList();

  // local state --> define task title & description
  // 2 states || state task : { title , description }
  // setTask((p)=>({...p,title:e.target.value})) OR setTask((p)=>({...p,description:e.target.value}))
  // {...rest} ---> get the last object contents , the position is important

  // to update task
  // 1 - get the task 
  // 2 - replace task by its index --> findIndex
  // [{id:0},{id:2},....,{id:30}]
  // find index ---> task @ id === 2
  // this at index 1
  // arr [ 1 ] = newTask

  const task = getSelectdTask();

  // className={classes['task-complete']?"":classes['task-complete']}
  const taskList = tasks?.map(task => (
    <li key={task.id} className={classes.task}>
      <div className={classes.taskDetails}>
        <p className={task.isComplete ? classes['task-complete'] : classes['task-notcomplete']}>{task.taskTextTitle}</p>
        <p className={task.isComplete ? classes['task-complete'] : classes['task-notcomplete']}>{task.taskTextdesc}</p>
      </div>
      <div className={classes.btns}>
        <div className={classes.firstBtns}>

          <button onClick={() => {
            selectedTask(task.id);
            showModal()
          }} className={classes.delete}>Delete</button>
          <button onClick={() => {
            selectedTask(task.id);
            showEditModal()
          }} className={classes.edit}>Edit</button>
        </div>
        <button onClick={() => taskDoneHandler(task.id)} className={classes.done}>Done</button>
      </div>
    </li>
  ));

  // const [taskTitle, setTaskTitle] = useState(task.taskTextTitle)

  return (
    <>
      {modalToRemoveIsShow && <Modal>

        <p className={classes.message}>Are you sure to remove!?</p>
        <div className={classes.btns}>
          <button onClick={() => removeTaskFromList()} className={classes.delete}>remove</button>
          <button onClick={hideModal} className={classes.done}>cansel</button>
        </div>

      </Modal>}
      {modalToEditIsShow && <Modal>

        {/* <form onSubmit={(e) => editTaskHandler({ ...selectedTaskData }, e)}> */}

        <InputField className={classes.editInput} id='task_input' label={'Task title'} type='text' value={task.taskTextTitle} onChange={(e) => setTextTitle(e.target.value)} />
        <InputField className={classes.editInput} id='task_input' label={'Task description'} type='text' value={task.taskTextdesc} />
        {/* <button className={classes.addBtn} onClick={addTaskHandler}>+ Add</button> */}

        <div className={(classes.btnsEdit)}>
          <button onClick={EditTask} className={classes.edit}>update</button>
          <button onClick={hideEditModal} className={classes.done}>cansel</button>
        </div>

      </Modal>}
      <section className={classes['task_section']}>
        <ul className={classes.taskList}>
          {taskList}
        </ul>
      </section>
    </>
  )
}

export default TaskCard