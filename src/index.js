import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);





// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// import {createStore, combineReducers} from "redux";
// import * as reducers from './state/reducers';
// import {Provider} from "react-redux";
// import {BrowserRouter as Router} from "react-router-dom"



// const rootReducer = combineReducers( {
//   location: reducers.locationReducer
// }
// )
// const store = createStore(rootReducer);


// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//     <Provider store = {store}><App /></Provider>
//     </Router>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


