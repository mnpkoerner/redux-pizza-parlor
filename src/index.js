import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

import {Provider} from 'react-redux';
import logger from 'redux-logger';
import {createStore, combineReducers, applyMiddleware} from 'redux';

//reducer to hold pizza order, expects array in payload
const orderReducer = (state = [], action) => {

    return state;
}

const getPizza = (state = [], action) => {
    switch(action.type) {
      case 'GET_PIZZA':
        return action.payload;
        default: return state;
    }
  
}

const toCart = (state = [], action) => {
  switch(action.type) {
    case 'GET_CART':
      return action.payload;
      default: return state;
  }

}

//storing customer information, expects object in payload
const customerReducer = (state = {}, action) =>{
    return state
}

const reduxStore = createStore(
    combineReducers({
      orderReducer,
      customerReducer,
      getPizza
    }),
    applyMiddleware(logger)
  );

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
