import React, { useState } from 'react'
import classes from './Header.module.css';
import { useToDoList } from '../../context/context';
import InputField from '../InputField/InputField';

const Header = () => {

  const { createTask, hideModalHandler, showModalHandler, modalToRemoveIsShow,modalToEditIsShow } = useToDoList()

  const [textTitle, setTextTitle] = useState('');
  const [textDisc, setTextDisc] = useState('');

  const addTaskHandler = () => {
    setTextTitle("");
    setTextDisc("");
    createTask({
      id: Math.random(),
      taskTextTitle: textTitle,
      taskTextdisc: textDisc,
      isComplete: false,
    })
  }

  return (
    <header className={classes.header}>
      <div className={classes.inputs}>
        <InputField id='task_input' label={'Task title'} type='text' value={textTitle} onChange={(e) => setTextTitle(e.target.value)} />
        <InputField id='task_input' label={'Task discription'} type='text' value={textDisc} onChange={(e) => setTextDisc(e.target.value)} />
        <button className={classes.addBtn} onClick={addTaskHandler}>+ Add</button>
      </div>
    </header>
  )
}

export default Header