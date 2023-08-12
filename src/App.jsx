
import Modal from './components/Modal/Modal';
import './App.css'
import Header from './components/Header/Header'
import TaskCard from './components/TaskCard/TaskCard'
import ToDoListProvider ,{ useToDoList } from './context/context'
// import from './context/context';

function App() {
  const { modalIsShow, tasks } = useToDoList();
  console.log(useToDoList());
  return (
    <>
      {modalIsShow && <Modal />}
      <h1 className='main_title'>to do list app</h1>
      <Header />
      <TaskCard />
      {/* <Modal /> */}
    </>
  )
}

export default App
