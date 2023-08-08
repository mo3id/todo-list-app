import React, { useState } from 'react'
import classes from './Header.module.css';
import { useToDoList } from '../../context/context';

const Header = () => {

  const { createTask,hideModalHandler,showModalHandler,modalIsShow } = useToDoList()
  
  const [text, setText] = useState('');
  
  const addTaskHandler = ()=> {
    setText("")
    createTask({
      id:Math.random(),
      taskText :text,
      isComplete:false,
    })
  }

  return (
    <header className={classes.header}>
      <label htmlFor='task_input' className={classes['label_input']}>Enter your task </label>
      <input id='task_input' className={classes['task_input']} type='text' value={text} onChange={(e) => setText(e.target.value)} />
      <button className={classes.addBtn} onClick= {addTaskHandler}>+ Add</button>
    </header>
  )
}

export default Header