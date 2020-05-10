import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from "./components/SignUp";
import { Link, Route } from "react-router-dom";
import LogIn from "./components/LogIn";
import Home from "./components/home";


function App() {
  return (
    <div className="App">
      <Route exact path = "/" component = {Signup}/>
      <Route path = "/login" component = {LogIn}/>
      <Route path = "/home" component = {Home}/>
    </div>
  );
}

export default App;
