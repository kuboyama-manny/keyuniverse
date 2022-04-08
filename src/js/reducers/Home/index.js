import _ from 'lodash';
import * as ActionTypes from '../../utils/actionType';

const initialState = {
  loading: false,
  games: {},
  isButtonLoading: false,
  searchedGames: [],
  searchKey: ''
};

const reducer = (state = initialState, action) => {
  let newState = _.cloneDeep(state);

  switch (action.type) {
    case ActionTypes.HOME_API_LOADING:
      newState.loading = true;
      return newState;

    case ActionTypes.HOME_BUTTON_LOADING:
      newState.isButtonLoading = true;
      return newState;

    case ActionTypes.SUCCESS_GET_HOME_PAGE_GAMES:
      newState.games = action.games;
      newState.loading = false;
      return newState;

    case ActionTypes.FAILED_GET_HOME_PAGE_GAMES:
      newState.loading = false;
      return newState;

    case ActionTypes.ON_CHANGE_SEARCH_KEY:
      newState.searchKey = action.searchKey;
      newState.isButtonLoading = false;
      return newState;

    case ActionTypes.SUCCESS_GET_SEARCH_GAMES:
      newState.searchedGames = action.data;
      newState.isButtonLoading = false;
      return newState;

    case ActionTypes.FAILED_GET_SEARCH_GAMES:
      return newState;

    default:
      return state;
  }
};

export default reducer;