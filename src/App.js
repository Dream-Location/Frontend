import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from "./components/SignUp";
import { Route } from "react-router-dom";
import LogIn from "./components/LogIn";
import LocationList from "./components/LocationList";


function App() {
  const [locations, setLocations] = useState([])
  return (
    <div className="App">
      <Route exact path = "/" component = {Signup}/>
      <Route path = "/login" component = {LogIn}/>
      <Route
        path = "/home"
        render = {(props) => {
          return(
            <LocationList {...props} locations = {locations} setLocations= {setLocations}/>
          )
        }}
      />
    </div>
  );
}

export default App;
