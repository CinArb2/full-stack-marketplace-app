import React from 'react'
import styles from '../styles/Modal.module.css'
import { GrClose } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { setCart, setIsLogin, setIsOpen, setSignup } from '../redux/modal/modalActionCreators';

const Modal = ({children}) => {
  const modal = useSelector(state => state.modal)
  const dispatch = useDispatch()

  const handleCloseModal = () => {
    dispatch(setIsOpen(false))
    dispatch(setIsLogin(false))
    dispatch(setSignup(false))
    dispatch(setCart(false))
  }

  return (
    <>
      <div
        className={`${styles.modalBackdrop} ${modal.isOpen ? styles.active : ''}`}
        onClick={handleCloseModal}
      ></div>
      <div className={`${styles.modalWrapper} ${modal.isOpen ? styles.active : ''}`}>
        <GrClose
          className={styles.closeBtn}
          onClick={handleCloseModal} />
        {children}
      </div>
    </>
  )
}

export default Modal