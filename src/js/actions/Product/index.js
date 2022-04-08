import * as ActionTypes from '../../utils/actionType';
import {productInfoService} from '../../services';

export const isLoading = () => ({type: ActionTypes.PRODUCT_API_LOADING});

export const getProductInfo = (safe_url, history) => {
  return (dispatch, getState) => {
    dispatch(isLoading());
    return productInfoService.getProduct(safe_url)
      .then(response => {
        dispatch(successGetProductInfo(response.data));
      })
      .catch(error => {
        dispatch(failedGetProductInfo(error.response));
        if (error.response.status === 401) {
          history.push('/login');
        }
      })
  }
};

export const successGetProductInfo = gameData => {
  return {
    type: ActionTypes.SUCCESS_GET_PRODUCT_INFO,
    gameData
  }
};

export const failedGetProductInfo = error => {
  return {
    type: ActionTypes.FAILED_GET_PRODUCT_INFO,
    error
  }
};

export const getCurrentSellers = (safe_url, history) => {
  return (dispatch, getState) => {
    dispatch(isLoading());
    return productInfoService.getCurrentSellers(safe_url)
      .then(response => {
        dispatch(successGetCurrentSellers(response.data));
      })
      .catch(error => {
        dispatch(failedGetCurrentSellers(error.response));
        if (error.response.status === 401) {
          history.push('/login');
        }
      })
  }
};

export const successGetCurrentSellers = currentSellers => {
  return {
    type: ActionTypes.SUCCESS_GET_CURRENT_SELLERS,
    currentSellers
  }
};

export const failedGetCurrentSellers = error => {
  return {
    type: ActionTypes.FAILED_GET_CURRENT_SELLERS,
    error
  }
};

export const addToCart = (groupId) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    groupId
  }
};

export const increaseQuantity = (groupId) => {
  return {
    type: ActionTypes.INCREASE_QUANTITY,
    groupId
  }
};

export const decreaseQuantity = (groupId) => {
  return {
    type: ActionTypes.DECREASE_QUANTITY,
    groupId
  }
};

export const removeOffer = (groupId) => {
  return {
    type: ActionTypes.REMOVE_OFFER,
    groupId
  }
};

export const resetQuantityCountError = () => {
  return {
    type: ActionTypes.RESET_QUANTITY_COUNT_ERROR
  }
};
