import React, { useState } from 'react';
import './App.css';
import Signup from "./components/SignUp";
import { Route, Redirect } from "react-router-dom";
import LogIn from "./components/LogIn";
import LocationList from "./components/LocationList";
import CreateLocation from "./components/createLocation";
import SwipeCard from "./components/Cards/SwipeCard";



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
      exact
      path="/locations"
      render={props => PrivateRoute(SwipeCard, props)}
      />
      <Route
        path = "/home"
        render = {props => {
          return(
            <LocationList {...props} locations = {locations} setLocations= {setLocations} value='location'/>
          )
        }}
      />
      <Route
          exact
          path="/addpost"
          render={props => PrivateRoute(CreateLocation, props)}
      />
      <Route
        exact
        path = "/favourites"
        render = {props => {
          return(
            <LocationList {...props} locations = {locations} setLocations= {setLocations} value='favourite'/>
          )
        }}
      />
      
    </div>
  );
}

export default App;
