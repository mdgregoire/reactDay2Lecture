import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import registerServiceWorker from './registerServiceWorker';
//createStore is a function
import { createStore, combineReducers, applyMiddleware } from 'redux';
//Provider is a Component
import { Provider } from 'react-redux';
//logger helps track the react side of react-redux
import logger from 'redux-logger';

const firstReducer = (state = 0, action) => {
  //this is a reducer
  // if(action.type === 'BUTTON_ONE'){
  //   return state += 1
  // } else if (action.type === 'BUTTON_TWO'){
  //     return state -=1
  //   }
  // return state;
  switch(action.type) {
    case 'BUTTON_ONE':
      return state += 1;
    case 'BUTTON_TWO':
      return state -= 1;
    default:
      return state;
  }
}

const secondReducer = (state = 0, action) => {
  if(action.type === 'BUTTON_TWO'){
    console.log('Hey! I am the secondReducer!!');
  }
  return state;
}

const thirdReducer = (state, action) => {
  console.log('3rd', action);
  return {};
}
const elementReducer = (state = [], action) => {
  if(action.type === 'ADD_ELEMENT'){
    console.log('addElement', action.payload);
    return [...state, action.payload]
  }
  return state;
}

const storeInstance = createStore(
  //in es6 you can have objects that have the same name for the key:value pairs be just the key name
  combineReducers( {
  firstReducer : firstReducer,
  secondReducer : secondReducer,
  thirdReducer : thirdReducer,
  elementReducer : elementReducer
} ),
applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
