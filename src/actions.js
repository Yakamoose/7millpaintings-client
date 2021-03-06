import history from './history';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';


export function loginError(user) {
  alert('Log In Failed | Error Message: ' + user.message);

  return {
    type: LOGIN_ERROR,
    user,
    loggedIn: false
  }
}


export function loginSuccess(user) {
  alert('Log In Successfull! Click OK to view art.');


  return {
    type: LOGIN_SUCCESS,
    firstName: user.firstName,
    fullName: user.fullName,
    id: user.id,
    email: user.email,
    username: user.userName,
    loggedIn: true
  }
}

export function registerError(user) {
  alert('Registration Error | ' + user.message);

  return {
    type: REGISTER_ERROR,
    user,
    loggedIn: false
  }
}

export function registerSuccess(user) {
  alert('User registered successfully. Click OK to view art.');

  return {
    type: REGISTER_SUCCESS,
    firstName: user.firstName,
    fullName: user.fullName,
    id: user.id,
    email: user.email,
    username: user.userName,
    loggedIn: true
  }
}
