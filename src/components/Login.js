import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios'

const initialFormValues = {
  username: '',
  password: ''
}

const Login = () => {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formError, setFormError] = useState('')
  const { push } = useHistory()

  const inputChangeHandler = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  // project was initially using the useEffect hook for post request
  // I changed it to a submit handler because we want post request to fire when form is submitted
  const loginHandler = e => {
    e.preventDefault()

    axios
      .post('http://localhost:5000/api/login', formValues)
      .then(res => {
        window.localStorage.setItem('token', res.data.payload) // note - I am not going to stringify since payload comes back as string
        push('/bubblepage')
      })
      .catch(err => {
        if(formValues.username === '' || formValues.password === '') {
          setFormError('Username or Password is not valid.')
        } else {
          setFormError(err.message)
        }
      })
    }

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <form onSubmit={loginHandler}>
          <input
            type='text'
            name='username'
            placeholder='username'
            data-testid='username'
            onChange={inputChangeHandler}
            value={formValues.username}
          />

          <input
            type='password'
            name='password'
            placeholder='password'
            data-testid='password'
            onChange={inputChangeHandler}
            value={formValues.password}
          />

          <button type='submit'>Login</button>
        </form>
      </div>

      <p data-testid="errorMessage" className="error">{formError}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.