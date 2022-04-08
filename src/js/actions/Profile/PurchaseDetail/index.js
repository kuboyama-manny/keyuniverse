import * as ActionTypes from '../../../utils/actionType';
import { profileInfoService } from '../../../services';

export const isLoading = () => ({ type: ActionTypes.PROFILE_PURCHASE_DETAIL_LOADING });

export const getPurchaseDetail = (paymentId, history) => {
  return (dispatch) => {
    dispatch(isLoading());
    return profileInfoService.getPurchaseDetail(paymentId)
      .then(response => {
        dispatch(successGetPurchaseDetail(response.data.purchases));
      })
      .catch(error => {
        dispatch(failedGetPurchaseDetail(error.response));
        if (error.response.status === 401) {
          history.push('/login');
        }
      })
  }
};

export const successGetPurchaseDetail = (data) => {
  return {
    type: ActionTypes.SUCCESS_GET_PURCHASE_DETAIL,
    data
  }
};

export const failedGetPurchaseDetail = (error) => {
  return {
    type: ActionTypes.FAILED_GET_PURCHASE_DETAIL,
    error
  }
};