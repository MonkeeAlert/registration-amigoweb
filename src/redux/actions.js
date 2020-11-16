export const SET_REGISTRATION_NAME        = 'SET_NAME';
export const SET_REGISTRATION_EMAIL       = 'SET_EMAIL';
export const SET_REGISTRATION_PHONE       = 'SET_PHONE';
export const SET_REGISTRATION_LANGUAGE    = 'SET_LANGUAGE';
export const TOGGLE_REGISTRATION_CHECKBOX = 'TOGGLE_CHECKBOX';

export const setRegistrationName        = payload => ({ type: SET_REGISTRATION_NAME, payload });
export const setRegistrationEmail       = payload => ({ type: SET_REGISTRATION_EMAIL, payload });
export const setRegistrationPhone       = payload => ({ type: SET_REGISTRATION_PHONE, payload });
export const setRegistrationLanguage    = payload => ({ type: SET_REGISTRATION_LANGUAGE, payload }); 
export const toggleRegistrationCheckbox = payload => ({ type: TOGGLE_REGISTRATION_CHECKBOX, payload }); 