import * as ActionTypes from '../../../utils/actionType';
import { profileInfoService } from '../../../services';

export const isLoading = () => ({ type: ActionTypes.OFFER_DETAIL_LOADING });

export const getOfferDetail = (groupId, history) => {
  return (dispatch) => {
    dispatch(isLoading());
    return profileInfoService.getOfferDetail(groupId)
      .then(response => {
        dispatch(successGetOfferDetail(response.data));
      })
      .catch(error => {
        dispatch(failedGetOfferDetail(error.response));
        if (error.response.status === 401) {
          history.push('/login');
        }
      })
  }
};

export const successGetOfferDetail = data => {
  return {
    type: ActionTypes.SUCCESS_GET_OFFER_DETAIL,
    data
  }
};

export const failedGetOfferDetail = error => {
  return {
    type: ActionTypes.FAILED_GET_OFFER_DETAIL,
    error
  }
};