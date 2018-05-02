import {combineReducers} from 'redux';



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

export default combineReducers({
  firstReducer : firstReducer,
  secondReducer : secondReducer,
  thirdReducer : thirdReducer,
  elementReducer : elementReducer
})
