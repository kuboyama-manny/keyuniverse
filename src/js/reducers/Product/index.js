import _ from 'lodash';
import * as ActionTypes from '../../utils/actionType';

const initialState = {
  loading: false,
  productData: null,
  currentSellers: null,
  items: [],
  quantityLessError: false,
  quantityMoreError: false,
  addToCartError: false,
  addToCardSuccess: false
};

const reducer = (state = initialState, action) => {
  let newState = _.cloneDeep(state);
  switch (action.type) {
    case ActionTypes.PRODUCT_API_LOADING:
      newState.loading = true;
      return newState;

    case ActionTypes.SUCCESS_GET_PRODUCT_INFO:
      newState.loading = false;
      newState.productData = action.gameData;
      return newState;

    case ActionTypes.FAILED_GET_PRODUCT_INFO:
      newState.loading = false;
      return newState;

    case ActionTypes.SUCCESS_GET_CURRENT_SELLERS:
      newState.loading = false;
      newState.currentSellers = action.currentSellers;
      return newState;

    case ActionTypes.FAILED_GET_CURRENT_SELLERS:
      newState.loading = false;
      return newState;

    case ActionTypes.ADD_TO_CART:
      const sellerIndexForAddCart = newState.currentSellers.offers.map(seller => seller.group_id).indexOf(action.groupId);
      if (newState.items.length === 0) {
        const newOffer = {
          group_id: action.groupId,
          quantity: 1,
          userInfo: newState.currentSellers.offers[sellerIndexForAddCart]
        };
        newState.addToCardSuccess = true;
        newState.items.push(newOffer);
      } else {
        const index = newState.items.map(offer => offer.group_id).indexOf(action.groupId);
        if (index > -1) {
          newState.addToCartError = true;
          return newState;
        }
        const newOffer = {
          group_id: action.groupId,
          quantity: 1,
          userInfo: newState.currentSellers.offers[sellerIndexForAddCart]
        };
        newState.addToCardSuccess = true;
        newState.items.push(newOffer);
      }
      return newState;

    case ActionTypes.INCREASE_QUANTITY:
      const offerIndexForIncrease = newState.items.map(offer => offer.group_id).indexOf(action.groupId);
      if (newState.items[offerIndexForIncrease].quantity < newState.items[offerIndexForIncrease].userInfo.available_keys) {
        newState.items[offerIndexForIncrease].quantity = newState.items[offerIndexForIncrease].quantity + 1;
      } else {
        newState.quantityMoreError = true;
      }
      return newState;

    case ActionTypes.DECREASE_QUANTITY:
      const offerIndexForDecrease = newState.items.map(offer => offer.group_id).indexOf(action.groupId);
      if (newState.items[offerIndexForDecrease].quantity === 1) {
        newState.quantityLessError = true;
        return newState;
      }
      newState.items[offerIndexForDecrease].quantity = newState.items[offerIndexForDecrease].quantity - 1;
      return newState;

    case ActionTypes.REMOVE_OFFER:
      const newItems = newState.items.filter(offer => offer.group_id !== action.groupId);
      newState.items = newItems;
      return newState;

    case ActionTypes.RESET_QUANTITY_COUNT_ERROR:
      newState.quantityMoreError = false;
      newState.quantityLessError = false;
      newState.addToCartError = false;
      newState.addToCardSuccess = false;
      return newState;

    case ActionTypes.RESET_SHIPPING_CART:
      newState.items = [];
      return newState;

    default:
      return state;
  }
};

export default reducer;