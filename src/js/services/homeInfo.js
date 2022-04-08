import constants from '../utils/constants';

export default function (apiService) {
  const self = {};
  const apiConstant = constants.api;

  self.GetHomePageGames = () =>
    apiService.get({
      method: 'GET',
      route: apiConstant.host + apiConstant.homepage
    });

  self.GetSearchGames = (searchKey) =>
    apiService.get({
      method: 'GET',
      route: apiConstant.host + apiConstant.searchedGames,
      queryParams: { key: searchKey }
    });

  return self;
}