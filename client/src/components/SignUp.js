import React, { useEffect, useState } from 'react'
import styles from '../styles/SignUp.module.css'
import { useDispatch, useSelector} from 'react-redux'
import { BsFillImageFill } from 'react-icons/bs'
import { signUp } from '../redux/user/userActionCreators'
import { openModalMsg, setError } from '../redux/error/errorActionCreators'
import { setIsLogin, setSignup } from '../redux/modal/modalActionCreators'

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  })
  const [selectedFile, setSelectedFile] = useState('');
  const dispatch = useDispatch()
  const errorMessage = useSelector(state => state.error.errorMsg)
  
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => {
      return {
        ...prev,
        [name]:  value,
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const formDataObj = new FormData();

    if (!selectedFile) {
      dispatch(setError('Please upload 1 image'))
      dispatch(openModalMsg())
      return 
    }
      
    formDataObj.append('avatarImg', selectedFile);
    formDataObj.append('username', formData.username);
    formDataObj.append('email', formData.email)
    formDataObj.append('password', formData.password)

    dispatch(signUp(formDataObj))
  }

  const inputImgChange = (e) => {
      setSelectedFile(e.target.files[0])
  }
  
  useEffect(() => {
    if (errorMessage === 'success') {
      setFormData({
        username: '',
        email: '',
        password: '',
      })
      setIsLogin(true)
      setSignup(false)
    }
  }, [errorMessage])
  

  const handleLogin = () => {
    dispatch(setSignup(false))
    dispatch(setIsLogin(true))
  }

  return (
    <div className={styles.signUpContainer}>
      <h1 className={styles.signUpTitle}>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label className={styles.inputLabel}>Username</label>
        <input
          className={styles.inputForm}
          type="text"
          value={formData.username}
          name='username'
          onChange={handleChange}
        />
        <label className={styles.inputLabel}>Email</label>
        <input
          className={styles.inputForm}
          type="email"
          value={formData.email}
          name='email'
          onChange={handleChange}
        />
        <label className={styles.inputLabel}>Password</label>
        <input
          className={styles.inputForm}
          type="password"
          value={formData.password}
          name='password'
          onChange={handleChange}
        />
        <div className={styles.inputContainer}>
          <label
            className={styles.labelImginput}>
            <span
              className={styles.labelTextImg}
            >
              Avatar Image
            </span>
            <BsFillImageFill
              className={styles.iconImg}
            />
            <input
            className={styles.inputImg}
            type="file"
            accept="image/*"
            name='avatarImg'
            onChange={inputImgChange}
            />
          </label>
        </div>
        <button
          className={styles.signUpButton}
          >Sign Up</button>
        <p>Already have an account?
          <span
            className={styles.btnRedirect}
            onClick={handleLogin}>
            Login
          </span>
        </p>
      </form>
    </div>
  )
}

export default SignUp