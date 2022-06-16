import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom' 
import { BsPersonCircle, BsCart2 } from 'react-icons/bs';
import { BiStore } from 'react-icons/bi';
import style from '../styles/Navbar.module.css'
import Modal from './Modal';
import Login from './Login';
import Cart from './Cart';
import { useDispatch, useSelector } from 'react-redux';
import SignUp from './SignUp';
import SearchBar from './SearchBar';
import { setCart, setIsLogin, setIsOpen, setLogged } from '../redux/modal/modalActionCreators';
import Logout from './Logout';


const Navbar = () => {
  const token = useSelector(state => state.token)
  const cart = useSelector(state => state.cart)
  const modal = useSelector(state => state.modal)
  const dispatch = useDispatch()
  
  let totalQuantityCart = 0

  const handleLoginBtn = () => {
    dispatch(setIsOpen(true))

    if (localStorage.getItem('token')) {
      dispatch(setLogged(true))
      return
    }
    dispatch(setIsLogin(true))
  }

  const handleCartBtn = () => {
    dispatch(setIsOpen(true))
    dispatch(setCart(true))
    dispatch(setIsLogin(false))
  }

  useEffect(() => {
    if (token) {
      setIsOpen(false)
    }
  }, [token])

  if(cart.productsCart.length > 0)
   totalQuantityCart = cart.productsCart?.reduce((prev, curr)=>prev + curr.quantity, 0)

  const getModalChildren = () => {
    console.log(modal)
    switch (true) {
      case modal.isLogin:
        return <Login/>
      case modal.isSignup:
        return <SignUp/>
      case modal.isCart:
        return <Cart />
      case modal.isLogged:
        return <Logout/>
      default:
        return;
    }
  }
  
  return (
    <>
      <nav className={style.navBar}>
        <NavLink to='/' className={style.logo}>
          <img src="./images/logo.png" alt="" />
        </NavLink>
        <div className={style.navRight}>
          <SearchBar/>
          <ul className={style.navbarList}>
            <li>
              <button className={style.navbarBtn} onClick={handleLoginBtn}>
                <BsPersonCircle className={style.navbarIcon} />
                <span className={style.navbarText}>
                  {localStorage.getItem('token') ? 'Profile': 'Sign In'}
                </span>
              </button>
            </li>
            {
              localStorage.getItem('token') &&
              <NavLink to='/shop?user=me'
                className={style.navbarBtn} >
                <BiStore className={style.navbarIcon} />
                <span className={style.navbarText}>My shop </span>
              </NavLink>
            }
            <li>
              <button className={style.navbarBtn} onClick={handleCartBtn}>
                <BsCart2 className={style.navbarIcon} />
                <span className={style.navbarText}>My cart</span>
              </button>
              <div className={style.navbarQuantity}>{totalQuantityCart ? totalQuantityCart : '0'}</div>
            </li>
          </ul>
        </div>
      </nav>
      <Modal>
        {getModalChildren()}
      </Modal>
    </>
  )
}

export default Navbar