import * as ActionTypes from '../../utils/actionType';
import { homeInfoService } from '../../services';

export const isLoading = () => ({ type: ActionTypes.HOME_API_LOADING });

export const isButtonLoading = () => ({ type: ActionTypes.HOME_BUTTON_LOADING});

export const getHomePageGames = (history) => {
  return (dispatch, getState) => {
    dispatch(isLoading());
    return homeInfoService.GetHomePageGames()
      .then(response => {
        dispatch(successGetHomePageGames(response.data))
      })
      .catch(error => {
        dispatch(failedGetHomePageGames(error.response))
        if (error.response.status === 401) {
          history.push('/login');
        }
      })
  }
};

export const successGetHomePageGames = games => {
  return {
    type: ActionTypes.SUCCESS_GET_HOME_PAGE_GAMES,
    games
  }
};

export const failedGetHomePageGames = error => {
  return {
    type: ActionTypes.FAILED_GET_HOME_PAGE_GAMES,
    error
  }
};

export const onChangeSearchKey = (searchKey) => {
  return {
    type: ActionTypes.ON_CHANGE_SEARCH_KEY,
    searchKey
  }
};

export const getSearchGames = (history) => {
  return (dispatch, getState) => {
    const searchKey = getState().home.searchKey;
    dispatch(isButtonLoading());
    return homeInfoService.GetSearchGames(searchKey)
      .then(response => {
        dispatch(successGetSearchGames(response.data.games));
      })
      .catch(error => {
        dispatch(failedGetSearchGames(error.response));
        if (error.response.status === 401) {
          history.push('/login');
        }
      })
  }
};

export const successGetSearchGames = (data) => {
  return {
    type: ActionTypes.SUCCESS_GET_SEARCH_GAMES,
    data
  }
};

export const failedGetSearchGames = (error) => {
  return {
    type: ActionTypes.FAILED_GET_SEARCH_GAMES,
    error
  }
};