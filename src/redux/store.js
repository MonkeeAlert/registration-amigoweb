import { createStore } from 'redux';
import { rootReducer } from './reducers';

const initialState = {
  registration: {
    name: {
      value: null,
      error: null
    },
    email: {
      value: null,
      error: null
    },
    phone: {
      value: null,
      error: null
    },
    checkbox: {
      value: false,
      error: null
    },
    // language: {
    //   value: false,
    //   error: null
    // },  
    language: null
  },

  errors: {
    registration: {
      name: null,
      email: null,
      phone: null,
      checkbox: null,
      // language: null
    }
  }
}

export const store = createStore(
  rootReducer, 
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)