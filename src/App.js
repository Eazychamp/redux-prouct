import React from 'react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Products from './components/Products';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  let user = JSON.parse(localStorage.getItem("user"))
  return (
    <div className="container">
      { user ?  <><Navbar /><Products /></> : <Login /> }
      
      <Router>
      <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
