import React, { useEffect, useState } from 'react'
import classes from './TaskCard.module.css'
import { useToDoList } from '../../context/context';
import Modal from '../Modal/Modal';
import InputField from '../InputField/InputField';

const TaskCard = () => {

  const { tasks, removeTaskFromList, taskDoneHandler, showModal, modalToRemoveIsShow, modalToEditIsShow, selectedTask, hideModal, hideEditModal, showEditModal, EditTask, task, update } = useToDoList();

  // local state --> define task title & description
  // setTask((p)=>({...p,title:e.target.value})) OR setTask((p)=>({...p,description:e.target.value}))
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

  // const task = getSelectdTask();
  const [editTask, setEditTask] = useState({
    title: "",
    descriotion: ""
  });


  useEffect(() => {
    setEditTask({
      title: task.taskTextTitle,
      descriotion: task.taskTextdesc
    })
  }, [task])


  const editTitle = (e) => {
    setEditTask((prev) => ({ ...prev, title: e.target.value }))
  }

  const editDescription = (e) => {
    setEditTask((prev) => ({ ...prev, descriotion: e.target.value }))
  }

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

        <InputField className={classes.editInput} id='task_input' label={'Task title'} type='text' value={editTask.title} onChange={editTitle} />
        <InputField className={classes.editInput} id='task_input' label={'Task description'} type='text' value={editTask.descriotion} onChange={editDescription} />

        <div className={(classes.btnsEdit)}>
          <button onClick={() => {
            update(task.id, editTask);
            hideEditModal();
          }} className={classes.edit}>update</button>
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