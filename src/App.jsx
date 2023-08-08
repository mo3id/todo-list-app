
import Modal from 'antd/es/modal/Modal';
import './App.css'
import Header from './components/Header/Header'
import TaskCard from './components/TaskCard/TaskCard'
import ToDoListProvider from './context/context'
import { useToDoList } from './context/context';

function App() {
  const { modalIsShow } = useToDoList();
  return (
    <ToDoListProvider>
      {modalIsShow && <Modal />}
      <h1 className='main_title'>to do list app</h1>
      <Header />
      <TaskCard />
    </ToDoListProvider>
  )
}

export default App
