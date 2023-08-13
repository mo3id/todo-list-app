import React, { createContext, useContext, useState, useEffect } from "react";


const InitialTasks = localStorage.getItem('tasks-list') ? JSON.parse(localStorage.getItem('tasks-list')) : [];
const ToDoListContext = createContext({

});

const ToDoListProvider = ({ children }) => {

  const [tasks, setTasks] = useState(InitialTasks);

  const [modalToRemoveIsShow, setmodalToRemoveIsShow] = useState(false);
  const [modalToEditIsShow, setmodalToEditIsShow] = useState(false);

  const [taskId, setTaskId] = useState('');

  const showModal = () => {
    setmodalToRemoveIsShow(true)
    console.log(modalToRemoveIsShow)
  }

  const showEditModal = () => {
    setmodalToEditIsShow(true)
    console.log(modalToEditIsShow)
  }

  const selectedTask = (id)=>{
    setTaskId(id)
  }

  const hideModal = () => {
    setmodalToRemoveIsShow(false)
  }

  const hideEditModal = () => {
    setmodalToEditIsShow(false)
  }

  const taskDoneHandler = (id) => {

    const completedTask = tasks.find((task) => task.id === id)

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

  const createTask = (task) => {
    task.taskTextTitle.length > 3 || task.taskTextdisc.length > 3 ? setTasks([task, ...tasks]) : alert('enter valed task more than 3 letters')
    console.log(task);
  }

  const removeTaskFromList = () => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    setmodalToRemoveIsShow(false)
  };

  const EditTask = () => {
    console.log("edit");
    setmodalToEditIsShow(false);
  };

  return (
    <ToDoListContext.Provider value={{ removeTaskFromList, tasks, createTask, taskDoneHandler, modalToRemoveIsShow,modalToEditIsShow,hideModal,hideEditModal, showModal,showEditModal, selectedTask,EditTask }}>

      {children}

    </ToDoListContext.Provider>
  )
}

export default ToDoListProvider;

export const useToDoList = () => {
  return useContext(ToDoListContext);
};
