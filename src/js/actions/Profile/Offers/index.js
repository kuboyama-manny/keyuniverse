import * as ActionTypes from '../../../utils/actionType';
import { profileInfoService } from '../../../services';

export const isLoading = () => ({type: ActionTypes.PROFILE_API_LOADING});

export const getProfileOffers = (history) => {
  return (dispatch, getState) => {
    dispatch(isLoading());
    return profileInfoService.userOffers()
      .then(response => {
        dispatch(successGetProfileOffers(response.data.offers));
      })
      .catch(error => {
        dispatch(failedGetProfileOffers(error.response));
        if (error.response.status === 401) {
          history.push('/login');
        }
      })
  }
};

export const successGetProfileOffers = offers => {
  return {
    type: ActionTypes.SUCCESS_GET_PROFILE_OFFERS,
    offers
  }
};

export const failedGetProfileOffers = error => {
  return {
    type: ActionTypes.FAILED_GET_PROFILE_OFFERS,
    error
  }
};