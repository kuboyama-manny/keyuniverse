import _ from 'lodash';
import * as ActionTypes from '../../../utils/actionType';

const initialState = {
  loading: false,
  purchaseDetail: []
};

const reducer = (state = initialState, action) => {
  let newState = _.cloneDeep(state);
  switch (action.type) {
    case ActionTypes.PROFILE_PURCHASE_DETAIL_LOADING:
      newState.loading = true;
      return newState;

    case ActionTypes.SUCCESS_GET_PURCHASE_DETAIL:
      newState.purchaseDetail = action.data;
      newState.loading = false;
      return newState;

    case ActionTypes.FAILED_GET_PURCHASE_DETAIL:
      newState.loading = false;
      return newState;

    default:
      return state;
  }
};

export default reducer;