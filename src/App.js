import React, { useState } from 'react';
import './App.css';
import Signup from "./components/SignUp";
import { Route, Redirect } from "react-router-dom";
import LogIn from "./components/LogIn";
import LocationList from "./components/LocationList";
import CreateLocation from "./components/CreateLocation";
import Favourites from "./components/Favourites";


function App() {

  const PrivateRoute = (Component, props) => {
    return localStorage.getItem("token") ? (
      <Component {...props} />
    ) : (
      <Redirect to="/login" />
    );
  };

  const [locations, setLocations] = useState([])
  return (
    <div className="App">
      <Route exact path = "/" component = {Signup}/>
      <Route path = "/login" component = {LogIn}/>
      <Route
        path = "/home"
        render = {props => {
          return(
            <LocationList {...props} locations = {locations} setLocations= {setLocations}/>
          )
        }}
      />
      <Route
          exact
          path="/createpost"
          render={props => PrivateRoute(CreateLocation, props)}
      />
      <Route
        exact
        path = "/favourite"
        render = {props => {
          return(
            <Favourites {...props} locations = {locations} setLocations = {setLocations}/>
          )
        }}
      />
      
    </div>
  );
}

export default App;
