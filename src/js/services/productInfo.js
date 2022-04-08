import constants from '../utils/constants';

export default function (apiService) {
  const self = {};
  const apiConstant = constants.api;

  self.getProduct = (safe_url) =>
    apiService.get({
      method: 'GET',
      route: apiConstant.host + apiConstant.game,
      queryParams: { safe_url }
    });

  self.getCurrentSellers = (safe_url) =>
    apiService.get({
      method: 'GET',
      route: apiConstant.host + apiConstant.currentSellers,
      queryParams: { safe_url }
    });

  return self;
}