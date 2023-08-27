import React, { createContext, useContext, useState, useEffect } from "react";


const InitialTasks = localStorage.getItem('tasks-list') ? JSON.parse(localStorage.getItem('tasks-list')) : [];
const ToDoListContext = createContext({

});

const ToDoListProvider = ({ children }) => {

  const [tasks, setTasks] = useState(InitialTasks);

  const [modalToRemoveIsShow, setmodalToRemoveIsShow] = useState(false);
  const [modalToEditIsShow, setmodalToEditIsShow] = useState(false);

  const [taskId, setTaskId] = useState('');

  const [task, setTask] = useState({
    id: "",
    taskTextTitle: "",
    taskTextdesc: "",
    isComplete: false
  });

  const getSelectdTask = () => {
    return tasks.find((task) => task.id === taskId);
  }

  const showModal = () => {
    setmodalToRemoveIsShow(true)
  }

  const showEditModal = () => {
    setmodalToEditIsShow(true)
  }

  const selectedTask = (id) => {
    setTaskId(id)
  }

  const hideModal = () => {
    setmodalToRemoveIsShow(false)
  }

  const hideEditModal = () => {
    setmodalToEditIsShow(false)
  }

  const taskDoneHandler = (id) => {

    const completedTask = tasks.find((task) => task.id === id) // #758F9A

    // non primative ==> hold refrence
    // [ memory place 1 , ... ]

    if (completedTask.isComplete) {
      completedTask.isComplete = false
      setTasks((prev) => [...prev])

    } else {
      completedTask.isComplete = true
      setTasks((prev) => [...prev])
    }

  }

  useEffect(() => {
    localStorage.setItem('tasks-list', JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => {
    const task = getSelectdTask()
    if (task)
      setTask(task)
  }, [taskId])

  const createTask = (task) => {
    task.taskTextTitle.length > 3 || task.taskTextdesc.length > 3 ? setTasks([task, ...tasks]) : alert('enter valed task more than 3 letters')
  }

  const removeTaskFromList = () => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    setmodalToRemoveIsShow(false)
  };

  const EditTask = () => {
    setmodalToEditIsShow(false);
  };

  const update = (id, edit) => {
    const index = tasks.findIndex((ele) => ele.id == id);
    const updatedTask = tasks[index];
    updatedTask.taskTextdesc = edit.descriotion;
    updatedTask.taskTextTitle = edit.title;
    const prevTasks = [...tasks];
    prevTasks[index] = updatedTask
    setTasks(prevTasks);
  }

  return (
    <ToDoListContext.Provider value={{ removeTaskFromList, tasks, createTask, taskDoneHandler, modalToRemoveIsShow, modalToEditIsShow, hideModal, hideEditModal, showModal, showEditModal, selectedTask, EditTask, task, update }}>

      {children}

    </ToDoListContext.Provider>
  )
}

export default ToDoListProvider;

export const useToDoList = () => {
  return useContext(ToDoListContext);
};
