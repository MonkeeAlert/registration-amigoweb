import * as action from './actions';

export const rootReducer = (state, {type, payload}) => {
  switch(type) {
    case action.SET_NAME:
      
      return {
        ...state,
        registration: {
          ...state.registration,
          name: {
            value: payload,
            hasError: false
          }
        }
      }

    case action.SET_EMAIL:
      return {
        ...state,
        registration: {
          ...state.registration,
          email: {
            value: payload,
            hasError: false
          }
        }
      }  
    
    case action.SET_PHONE:
      return {
        ...state,
        registration: {
          ...state.registration,
          phone: {
            value: payload,
            hasError: false
          }
        }
      }  

    case action.TOGGLE_CHECKBOX:
      return {
        ...state,
        registration: {
          ...state.registration,
          checkbox: !state.registration.checkbox
        }
      }    

    default: return  { ...state }
  }
}