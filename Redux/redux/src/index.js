import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore} from 'react-redux';

//store
const store = createStore();

//action
const actionIncrement = () => {
  return {
    type:"increment"
  }
};

//reducer
const count = (state = 0,action)=>{
  switch(action.type){
    case "increment":
      return state+1;
    case "dec":
      return state-1;
    default:null;
  }
};

//dispatch
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
