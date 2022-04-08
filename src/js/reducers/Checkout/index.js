import _ from 'lodash';
import * as ActionTypes from '../../utils/actionType';

const initialState = {
  loading: false,
  clientSecret: '',
  cardElement: null,
  address: {
    city: '',
    country: '',
    line1: '',
    line2: '',
    postal_code: ''
  },
  isHandlePayment: false,
  paymentId: '',
  paymentFlowStatus: false,
  gotDate: '',
  orders: []
};

const reducer = (state = initialState, action) => {
  let newState = _.cloneDeep(state);

  switch (action.type) {
    case ActionTypes.CHECKOUT_API_LOADING:
      newState.loading = true;
      return newState;

    case ActionTypes.SUCCESS_CREATE_SOURCE:
      newState.loading = false;
      newState.clientSecret = action.secret.client_secret;
      return newState;

    case ActionTypes.FAILED_CREATE_SOURCE:
      newState.loading = false;
      return newState;

    case ActionTypes.CHANGE_ADDRESS1:
      newState.address.line1 = action.address1;
      return newState;

    case ActionTypes.CHANGE_ADDRESS2:
      newState.address.line2 = action.address2;
      return newState;

    case ActionTypes.CHANGE_COUNTRY:
      newState.address.country = action.country;
      return newState;

    case ActionTypes.CHANGE_CITY:
      newState.address.city = action.city;
      return newState;

    case ActionTypes.CHANGE_POSTAL_CODE:
      newState.address.postal_code = action.postalCode;
      return newState;

    case ActionTypes.CHANGE_CARD_DETAIL:
      const cardElement = Object.assign({}, newState.cardElement, action.element);
      newState.cardElement = cardElement;
      return newState;

    case ActionTypes.SUCCESS_HANDLE_PAYMENT:
      newState.loading = false;
      newState.isHandlePayment = true;
      newState.paymentId = action.paymentId;
      return newState;

    case ActionTypes.FAILED_HANDLE_PAYMENT:
      newState.loading = false;
      return newState;

    case ActionTypes.SUCCESS_PAYMENT_CHECK:
      newState.paymentFlowStatus = true;
      newState.loading = false;
      return newState;

    case ActionTypes.FAILED_PAYMENT_CHECK:
      newState.loading = false;
      return newState;

    case ActionTypes.SUCCESS_GET_PRODUCT:
      newState.gotDate = action.data.date;
      newState.orders = action.data.order;
      newState.loading = false;
      return newState;

    case ActionTypes.FAILED_GET_PRODUCT:
      newState.loading = false;
      return newState;

    default:
      return state;
  }
};

export default reducer;