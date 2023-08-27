import React, { useState } from 'react'
import classes from './Header.module.css';
import { useToDoList } from '../../context/context';
import InputField from '../InputField/InputField';

const Header = () => {

  const { createTask, hideModalHandler, showModalHandler, modalToRemoveIsShow, modalToEditIsShow } = useToDoList()

  const [textTitle, setTextTitle] = useState('');
  const [textDesc, setTextDesc] = useState('');

  const addTaskHandler = () => {
    setTextTitle("");
    setTextDesc("");
    createTask({
      id: Math.random(),
      taskTextTitle: textTitle,
      taskTextdesc: textDesc,
      isComplete: false,
    })
  }

  return (
    <header className={classes.header}>
      <div className={classes.inputs}>
        <InputField id='task_input' label={'Task title'} type='text' value={textTitle} onChange={(e) => setTextTitle(e.target.value)} />
        <InputField id='task_input' label={'Task description'} type='text' value={textDesc} onChange={(e) => setTextDesc(e.target.value)} />
        <button className={classes.addBtn} onClick={addTaskHandler}>+ Add</button>
      </div>
    </header>
  )
}

export default Header