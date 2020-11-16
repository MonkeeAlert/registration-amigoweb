import * as action from './actions';

export const rootReducer = (state, {type, payload}) => {
  let pattern = null;

  switch(type) {
    case action.SET_NAME:
      pattern = /^[ a-zA-Zа-яА-ЯЁё-’]+$/;

      if(payload === '') {
        return {
          ...state,
          registration: {
            ...state.registration,
            name: { value: null, error: 'Пожалуйста, введите имя' }
          }
        } 
      } else {
        if(!pattern.test(payload)) {
          return {
            ...state,
            registration: {
              ...state.registration,
              name: { value: null, error: 'Введено некорретное значение' }
            }
          }
        } 
        
        return {
          ...state,
          registration: {
            ...state.registration,
            name: { value: payload, error: false }
          }
        }
      }

    case action.SET_EMAIL:
      pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])$/;

      if(payload === '') {
        return {
          ...state,
          registration: {
            ...state.registration,
            email: { value: null, error: 'Пожалуйста, введите почту' }
          }
        } 
      } else {
        if(!pattern.test(payload)) {
          return {
            ...state,
            registration: {
              ...state.registration,
              email: { value: null, error: 'Введено некорретное значение' }
            }
          }
        } 
        
        return {
          ...state,
          registration: {
            ...state.registration,
            email: { value: payload, error: false }
          }
        }
      }
    
    case action.SET_PHONE:
      pattern = /^[+]?\d[(]?\d{3}[)]?(\d{3}[-]?\d{2}[-]?\d{2}|\d{2}[-]?\d{2}[-]?\d{3})$/;

      if(payload === '') {
        return {
          ...state,
          registration: {
            ...state.registration,
            phone: { value: null, error: 'Пожалуйста, введите телефон' }
          }
        } 
      } else {
        if(!pattern.test(payload)) {
          return {
            ...state,
            registration: {
              ...state.registration,
              phone: { value: null, error: 'Введено некорретное значение' }
            }
          }
        } 
        
        return {
          ...state,
          registration: {
            ...state.registration,
            phone: { value: payload, error: false }
          }
        }
      }

    case action.SET_LANGUAGE:
      return {
        ...state,
        registration: {
          ...state.registration,
          language: payload
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