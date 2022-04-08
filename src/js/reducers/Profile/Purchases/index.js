import _ from 'lodash';
import * as ActionTypes from '../../../utils/actionType';

const initialState = {
  loading: false,
  purchases: []
};

const reducer = (state = initialState, action) => {
  let newState = _.cloneDeep(state);
  switch (action.type) {
    case ActionTypes.PROFILE_PURCHASES_LOADING:
      newState.loading = true;
      return newState;

    case ActionTypes.SUCCESS_GET_PURCHASES:
      newState.purchases = action.data;
      newState.loading = false;
      return newState;

    case ActionTypes.FAILED_GET_PURCHASES:
      newState.loading = false;
      return newState;

    default:
      return state;
  }
};

export default reducer;