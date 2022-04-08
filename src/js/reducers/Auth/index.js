import _ from 'lodash';
import * as ActionTypes from '../../utils/actionType';
import { getCookie } from '../../utils/helpers';

const initialState = {
  loading: false,
  loginCurrentView: 'signin',
  signUpCurrentView: 'signup',
  loggedIn: getCookie('csrf_access_token') !== null ? true : false,
  username: '',
  email: '',
  password: '',
  invalidUser: false
};

const reducer = (state = initialState, action) => {
  let newState = _.cloneDeep(state);

  switch (action.type) {
    case ActionTypes.ON_CHANGE_INPUT:
      if (action.inputName === 'username') {
        newState.username = action.value;
      } else if (action.inputName === 'email') {
        newState.email = action.value;
      } else if (action.inputName === 'password') {
        newState.password = action.value;
      }
      return newState;

    case ActionTypes.AUTH_API_LOADING:
      newState.loading = true;
      return newState;

    case ActionTypes.SUCCESS_REGISTER_USER:
      newState.loggedIn = true;
      newState.loading = false;
      return newState;

    case ActionTypes.FAILED_REGISTER_USER:
      newState.loading = false;
      return newState;

    case ActionTypes.SUCCESS_LOGIN_USER:
      newState.loggedIn = true;
      newState.loading = false;
      return newState;

    case ActionTypes.FAILED_LOGIN_USER:
      if (action.error.status === 422) {
        newState.invalidUser = true;
      }
      newState.loading = false;
      return newState;

    case ActionTypes.CHANGE_LOGIN_CURRENT_VIEW:
      newState.loginCurrentView = action.currentView;
      return newState;

    case ActionTypes.CHANGE_SIGNUP_CURRENT_VIEW:
      newState.signUpCurrentView = action.currentView;
      return newState;

    case ActionTypes.SUCCESS_REMOVE_ACCESS_TOKEN:
      return newState;

    case ActionTypes.FAILED_REMOVE_ACCESS_TOKEN:
      newState.loading = false;
      return newState;

    case ActionTypes.SUCCESS_REMOVE_REFRESH_TOKEN:
      newState.loading = false;
      newState.loggedIn = false;
      return newState;

    case ActionTypes.FAILED_REMOVE_REFRESH_TOKEN:
      newState.loading = false;
      return newState;

    default:
      return state;
  }
};

export default reducer;