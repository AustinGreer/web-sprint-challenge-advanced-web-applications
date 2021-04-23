import React, { useState } from "react";
import { Route, useHistory } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from './components/BubblePage';
import PrivateRoute from'./components/PrivateRoute';
import "./styles.scss";

function App() {
  const {push} = useHistory()
  
  const handleLogOutBtn = e => {
    e.preventDefault();
    window.localStorage.removeItem('token')
    push('/')
  }
  
  return (
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a data-testid="logoutButton" href="#" onClick={handleLogOutBtn}>logout</a>
        </header> 

        <Route exact path="/" component={Login} />
        <PrivateRoute exact path='/bubblepage' component={BubblePage} />
      </div>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.