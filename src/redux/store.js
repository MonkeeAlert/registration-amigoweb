import { createStore } from 'redux';
import { rootReducer } from './reducers';

const initialState = {
  registration: {
    name: {
      value: null,
      hasError: false
    },
    email: {
      value: null,
      hasError: false
    },
    phone: {
      value: null,
      hasError: false
    },
    language: null,
    checkbox: false
  }
}

export const store = createStore(
  rootReducer, 
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)