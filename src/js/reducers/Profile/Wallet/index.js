import _ from 'lodash';
import * as ActionTypes from '../../../utils/actionType';

const initialState = {
  loading: false,
  balance: '',
  transactions: []
};

const reducer = (state = initialState, action) => {
  let newState = _.cloneDeep(state);

  switch (action.type) {
    case ActionTypes.WALLET_LOADING:
      newState.loading = true;
      return newState;

    case ActionTypes.SUCCESS_GET_TRANSACTIONS:
      newState.balance = action.data.balance;
      newState.transactions = action.data.transactions;
      newState.loading = false;
      return newState;

    case ActionTypes.FAILED_GET_TRANSACTIONS:
      newState.loading = false;
      return newState;

    default:
      return state;
  }
};

export default reducer;