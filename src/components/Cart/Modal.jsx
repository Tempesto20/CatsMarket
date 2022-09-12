import React from 'react';
import styles from '../../scss/components/modal.module.scss';
import ReactDOM from 'react-dom';

const Backdrop =(props)=>{
    return (
        <div className={styles.backdrop} onClick={props.onHideCart}>
            
        </div>
      );
}

const ModalWindow =(props)=>{
    return (
        <div className={styles.modal}>
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
      );
}

const portalElement = document.getElementById("overlays");

const Modal =(props)=> {
  return (
    <React.Fragment>
        {ReactDOM.createPortal(<Backdrop onHideCart={props.onHideCart}   />, portalElement)}
        {ReactDOM.createPortal(<ModalWindow>  {props.children} </ModalWindow>, portalElement)}
        {/*<Backdrop />
        <ModalWindow>  {props.children} </ModalWindow>*/}
    </React.Fragment>
  );
}

export default Modal;