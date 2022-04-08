import * as ActionTypes from '../../../utils/actionType';
import { profileInfoService } from '../../../services';

export const isLoading = () => ({ type: ActionTypes.WALLET_LOADING });

export const getTransactions = (history) => {
  return (dispatch) => {
    dispatch(isLoading());
    return profileInfoService.getTransactions()
      .then(response => {
        dispatch(successGetTransactions(response.data));
      })
      .catch(error => {
        dispatch(failedGetTransactions(error.response));
        if (error.response.status === 401) {
          history.push('/login');
        }
      })
  }
};

export const successGetTransactions = (data) => {
  return {
    type: ActionTypes.SUCCESS_GET_TRANSACTIONS,
    data
  }
};

export const failedGetTransactions = error => {
  return {
    type: ActionTypes.FAILED_GET_TRANSACTIONS,
    error
  }
};