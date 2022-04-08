import * as ActionTypes from '../../utils/actionType';
import { checkoutInfoService } from '../../services';

export const isLoading = () => ({ type: ActionTypes.CHECKOUT_API_LOADING });

export const createSource = (history) => {
  return (dispatch, getState) => {
    const newItems = getState().product.items.map(offer => {
      return {
        group_id: offer.group_id,
        quantity: offer.quantity
      }
    });
    const data = { items: newItems };
    dispatch(isLoading());
    return checkoutInfoService.CreateSource(data)
      .then(response => {
        dispatch(successCreateSource(response.data));
        dispatch(resetShippingCart());
      })
      .catch(error => {
        dispatch(failedCreateSource(error.response));
        if (error.response.status === 401) {
          history.push('/login');
        }
      })
  }
};

export const successCreateSource = secret => {
  return {
   type: ActionTypes.SUCCESS_CREATE_SOURCE,
    secret
  }
};

export const failedCreateSource = error => {
  return {
    type: ActionTypes.FAILED_CREATE_SOURCE,
    error
  }
};

export const resetShippingCart = () => {
  return {
    type: ActionTypes.RESET_SHIPPING_CART
  }
};

export const onChangeCardDetail = element => {
  return {
    type: ActionTypes.CHANGE_CARD_DETAIL,
    element
  }
};

export const onChangeAddress1 = (address1) => {
  return {
    type: ActionTypes.CHANGE_ADDRESS1,
    address1,
  }
};

export const onChangeAddress2 = (address2) => {
  return {
    type: ActionTypes.CHANGE_ADDRESS2,
    address2,
  }
};

export const onChangeCountry = (country) => {
  return {
    type: ActionTypes.CHANGE_COUNTRY,
    country,
  }
};

export const onChangeCity = (city) => {
  return {
    type: ActionTypes.CHANGE_CITY,
    city,
  }
};

export const onChangePostalCode = (postalCode) => {
  return {
    type: ActionTypes.CHANGE_POSTAL_CODE,
    postalCode,
  }
};

export const handlePayment = (stripe, history) => {
  return (dispatch, getState) => {
    const clientSecret = getState().checkout.clientSecret;
    const cardElement = getState().checkout.cardElement;
    const address = getState().checkout.address;
    dispatch(isLoading());
    return stripe.handleCardPayment(clientSecret, cardElement, { source_data: { owner: { address } } })
      .then(response => {
        dispatch(successHandlePayment(response.paymentIntent.id));
        dispatch(paymentCheck(response.paymentIntent.id, history));
      })
      .catch(error => {
        dispatch(failedHandlePayment(error));
      })
  }
};

export const successHandlePayment = paymentId => {
  return {
    type: ActionTypes.SUCCESS_HANDLE_PAYMENT,
    paymentId
  }
};

export const failedHandlePayment = error => {
  return {
    type: ActionTypes.FAILED_HANDLE_PAYMENT,
    error
  }
};

export const paymentCheck = (paymentId, history) => {
  return (dispatch) => {
    const data = { payment_id: paymentId };
    dispatch(isLoading());
    return checkoutInfoService.PaymentCheck(data)
      .then(response => {
        dispatch(successPaymentCheck(response.data));
      })
      .catch(error => {
        dispatch(failedPaymentCheck(error.response));
        if (error.response.status === 401) {
          history.push('/login');
        }
      })
  }
};

export const successPaymentCheck = (data) => {
  return {
    type: ActionTypes.SUCCESS_PAYMENT_CHECK,
    data
  }
};

export const failedPaymentCheck = (error) => {
  return {
    type: ActionTypes.FAILED_PAYMENT_CHECK,
    error
  }
};

export const getProductKey = (history) => {
  return (dispatch, getState) => {
    const data = { payment_id: getState().checkout.paymentId };
    dispatch(isLoading());
    return checkoutInfoService.getProductKey(data)
      .then(response => {
        dispatch(successGetProductKey(response.data));
      })
      .catch(error => {
        dispatch(failedGetProductKey(error.response));
        if (error.response.status === 401) {
          history.push('/login');
        }
      })
  }
};

export const successGetProductKey = (data) => {
  return {
    type: ActionTypes.SUCCESS_GET_PRODUCT,
    data
  }
};

export const failedGetProductKey = (error) => {
  return {
    type: ActionTypes.FAILED_GET_PRODUCT,
    error
  }
};