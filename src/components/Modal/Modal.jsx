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
    <div className={classes.modal}>
      <div className={classes.content}>
        {/* <p className={classes.message}>Are you sure to remove!?</p>
        <div className={classes.btns}>
          <button onClick={() => removeTaskFromList()} className={classes.delete}>remove</button>
          <button onClick={hideModal} className={classes.done}>cansel</button>
        </div> */}
        {props.children}
      </div>
    </div>
  )
}

const portalElement = document.getElementById("overlays")

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
  )
}

export default Modal