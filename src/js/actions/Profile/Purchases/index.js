import * as ActionTypes from '../../../utils/actionType';
import { profileInfoService } from '../../../services';

export const isLoading = () => ({ type: ActionTypes.PROFILE_PURCHASES_LOADING });

export const GetPurchases = (history) => {
  return (dispatch) => {
    dispatch(isLoading());
    return profileInfoService.getPurchases()
      .then(response => {
        dispatch(successGetPurchases(response.data.purchases));
      })
      .catch(error => {
        dispatch(failedGetPurchases(error.response));
        if (error.response.status === 401) {
          history.push('/login');
        }
      })
  }
};

export const successGetPurchases = (data) => {
  return {
    type: ActionTypes.SUCCESS_GET_PURCHASES,
    data
  }
};

export const failedGetPurchases = error => {
  return {
    type: ActionTypes.FAILED_GET_PURCHASES,
    error
  }
};