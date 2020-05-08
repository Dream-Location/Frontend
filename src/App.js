import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from "./components/SignUp";
import { Link, Route } from "react-router-dom";
import LogIn from "./components/LogIn";


function App() {
  return (
    <div className="App">
      <Route path = "/signup" component = {Signup}/>
      <Route path = "/login" component = {LogIn}/>
    </div>
  );
}

export default App;
