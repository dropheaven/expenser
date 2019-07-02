import { createStore, combineReducers } from 'redux';

const intialState = { email: '', password: '' }
const currentUserReducer = (state = intialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const store = createStore(
  combineReducers({
    currentUser: currentUserReducer
  })
);

export default store;