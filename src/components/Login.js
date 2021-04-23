import React, { useState, useEffect } from "react";

const initialFormValues = {
  username: '',
  password: ''
}

const initialErrorValues = {
  username: '',
  password: ''
}

const Login = () => {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setformErrors] = useState('')

  const inputChangeHandler = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  useEffect(()=>{
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route
  });
  
  

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <form>
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

          {/* <input
            type='submit'
          /> */}
          <button type='submit'>Login</button>
        </form>
      </div>

      <p data-testid="errorMessage" className="error">{formErrors}</p>
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