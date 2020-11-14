export const SET_NAME        = 'SET_NAME';
export const SET_EMAIL       = 'SET_EMAIL';
export const SET_PHONE       = 'SET_PHONE';
export const SET_LANGUAGE    = 'SET_LANGUAGE';
export const TOGGLE_CHECKBOX = 'TOGGLE_CHECKBOX';

export const setName = payload => ({ type: SET_NAME, payload });
export const setEmail = payload => ({ type: SET_EMAIL, payload });
export const setPhone = payload => ({ type: SET_PHONE, payload });
export const setLanguage = payload => ({ type: SET_LANGUAGE, payload }); 
export const toggleCheckbox = _ => ({ type: TOGGLE_CHECKBOX }); 