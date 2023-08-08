import React from 'react';
import classes from './Modal.module.css';
import ReactDOM from 'react-dom';
import { useToDoList } from '../../context/context';


const Backdrop = () => {
  const { hideModal } = useToDoList();
  return (
    <div onClick={hideModal} className={classes.backdrop}></div>
  )
}

const ModalOverlay = (props) => {
  const { removeTaskFromList, hideModal } = useToDoList();
  return (
    <div className={classes.overlay}>
      <div className={classes.content}>
        <p>Are you sure to delete!?</p>
        <div className={classes.btns}>
          <button onClick={removeTaskFromList} className={classes.delete}>Okay</button>
          <button onClick={hideModal} className={classes.done}>No</button>
        </div>
      </div>
    </div>
  )
}

const portalElement = document.getElementById("overlays")

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay />, portalElement)}
    </>
  )
}

export default Modal