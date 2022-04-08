import * as ActionTypes from '../../utils/actionType';
import { authInfoService } from '../../services';

export const isLoading = () => ({ type: ActionTypes.AUTH_API_LOADING });

export const onChangeInput = (inputName, value) => {
  return {
    type: ActionTypes.ON_CHANGE_INPUT,
    inputName,
    value
  }
};

export const changeLoginCurrentView = (currentView) => {
  return {
    type: ActionTypes.CHANGE_LOGIN_CURRENT_VIEW,
    currentView
  }
};

export const changeSignUpCurrentView = (currentView) => {
  return {
    type: ActionTypes.CHANGE_SIGNUP_CURRENT_VIEW,
    currentView
  }
};

export const registerUser = inputValue => {
  return (dispatch, getState) => {
    dispatch(isLoading());
    return authInfoService.AuthRegister(inputValue)
      .then(response => {
        dispatch(successRegisterUser(response.data));
      })
      .catch(error => {
        dispatch(failedRegisterUser(error.response));
      })
  }
};

export const successRegisterUser = userInfo => {
  return {
    type: ActionTypes.SUCCESS_REGISTER_USER,
    userInfo
  }
};

export const failedRegisterUser = error => {
  return {
    type: ActionTypes.FAILED_REGISTER_USER,
    error
  }
};

export const loginUser = inputValue => {
  return (dispatch, getState) => {
    dispatch(isLoading());
    return authInfoService.AuthLogin(inputValue)
      .then(response => {
        dispatch(successSignUser(response.data));
      })
      .catch(error => {
        dispatch(failedLoginUser(error.response));
      })
  }
};

export const successSignUser = userInfo => {
  return {
    type: ActionTypes.SUCCESS_LOGIN_USER,
    userInfo
  }
};

export const failedLoginUser = error => {
  return {
    type: ActionTypes.FAILED_LOGIN_USER,
    error
  }
};

export const logoutUser = (history) => {
  return (dispatch, getState) => {
    dispatch(isLoading());
    return authInfoService.AuthLogout1()
      .then(response => {
        dispatch(successRemoveAccessToken(response.data));
        return authInfoService.AuthLogout2()
          .then(response => {
            dispatch(successRemoveRefreshToken(response.data));
          })
          .catch(error => {
            dispatch(failedRemoveRefreshToken(error.response));
            if (error.response.status === 401) {
              history.push('/login');
            }
          })
      })
      .catch(error => {
        dispatch(failedRemoveAccessToken(error.response));
        if (error.response.status === 401) {
          history.push('/login');
        }
      })
  }
};

export const successRemoveAccessToken = (message) => {
  return {
    type: ActionTypes.SUCCESS_REMOVE_ACCESS_TOKEN,
    message
  }
};

export const failedRemoveAccessToken = (error) => {
  return {
    type: ActionTypes.FAILED_REMOVE_ACCESS_TOKEN,
    error
  }
};

export const successRemoveRefreshToken = (message) => {
  return {
    type: ActionTypes.SUCCESS_REMOVE_REFRESH_TOKEN,
    message
  }
};

export const failedRemoveRefreshToken = (error) => {
  return {
    type: ActionTypes.FAILED_REMOVE_REFRESH_TOKEN,
    error
  }
};