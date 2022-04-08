import _ from 'lodash';
import * as ActionTypes from '../../../utils/actionType';

const initialState = {
  loading: false,
  offers: []
};

const reducer = (state = initialState, action) => {
  let newState = _.cloneDeep(state);
  switch (action.type) {
    case ActionTypes.PROFILE_API_LOADING:
      newState.loading = true;
      return newState;

    case ActionTypes.SUCCESS_GET_PROFILE_OFFERS:
      newState.loading = false;
      newState.offers = action.offers;
      return newState;

    case ActionTypes.FAILED_GET_PROFILE_OFFERS:
      newState.loading = false;
      return newState;

    default:
      return state;
  }
};

export default reducer;