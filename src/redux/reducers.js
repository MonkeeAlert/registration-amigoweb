import * as action from './actions';

export const rootReducer = ( state, {type, payload} ) => {
  let pattern = null;

  switch(type) {
    case action.SET_REGISTRATION_NAME:
      pattern = /^[ a-zA-Zа-яА-ЯЁё-’]+$/;

      if(payload === '') {
        return {
          ...state,
          registration: {
            ...state.registration,
            name: { value: null, error: 'Пожалуйста, введите имя' }
          },
          errors: {
            ...state.errors,
            registration: {
              ...state.errors.registration,
              name: true
            }
          }
        } 
      } else {
        if(!pattern.test(payload)) {
          return {
            ...state,
            registration: {
              ...state.registration,
              name: { value: null, error: 'Введено некорретное значение' }
            },
            errors: {
              ...state.errors,
              registration: {
                ...state.errors.registration,
                name: true
              }
            }
          }
        } 
        
        return {
          ...state,
          registration: {
            ...state.registration,
            name: { value: payload, error: false }
          },
          errors: {
            ...state.errors,
            registration: {
              ...state.errors.registration,
              name: false
            }
          }
        }
      }

    case action.SET_REGISTRATION_EMAIL:
      pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])$/;

      if(payload === '') {
        return {
          ...state,
          registration: {
            ...state.registration,
            email: { value: null, error: 'Пожалуйста, введите почту' }
          },
          errors: {
            ...state.errors,
            registration: {
              ...state.errors.registration,
              email: true
            }
          }
        } 
      } else {
        if(!pattern.test(payload)) {
          return {
            ...state,
            registration: {
              ...state.registration,
              email: { value: null, error: 'Введено некорретное значение' }
            },
            errors: {
              ...state.errors,
              registration: {
                ...state.errors.registration,
                email: true
              }
            }
          }
        } 
        
        return {
          ...state,
          registration: {
            ...state.registration,
            email: { value: payload, error: false }
          },
          errors: {
            ...state.errors,
            registration: {
              ...state.errors.registration,
              email: false
            }
          }
        }
      }
    
    case action.SET_REGISTRATION_PHONE:
      pattern = /^[+]?\d[(]?\d{3}[)]?(\d{3}[-]?\d{2}[-]?\d{2}|\d{2}[-]?\d{2}[-]?\d{3})$/;

      if(payload === '') {
        return {
          ...state,
          registration: {
            ...state.registration,
            phone: { value: null, error: 'Пожалуйста, введите телефон' }
          },
          errors: {
            ...state.errors,
            registration: {
              ...state.errors.registration,
              phone: true
            }
          }
        } 
      } else {
        if(!pattern.test(payload)) {
          return {
            ...state,
            registration: {
              ...state.registration,
              phone: { value: null, error: 'Введено некорретное значение' }
            },
            errors: {
              ...state.errors,
              registration: {
                ...state.errors.registration,
                phone: true
              }
            }
          }
        } 
        
        return {
          ...state,
          registration: {
            ...state.registration,
            phone: { value: payload, error: false }
          },
          errors: {
            ...state.errors,
            registration: {
              ...state.errors.registration,
              phone: false
            }
          }
        }
      }

    case action.SET_REGISTRATION_LANGUAGE:
      return {
        ...state,
        registration: {
          ...state.registration,
          language: payload
        },
      }  

    case action.TOGGLE_REGISTRATION_CHECKBOX:
      return {
        ...state,
        registration: {
          ...state.registration,
          checkbox: payload
        },
          errors: {
            ...state.errors,
            registration: {
              ...state.errors.registration,
              checkbox: !payload
            }
          }
      }    

    default: return  { ...state }
  }
}