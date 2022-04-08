import constants from '../utils/constants';
import { getCookie } from '../utils/helpers';

export default function (apiService) {
  const self = {};
  const apiConstant = constants.api;

  self.CreateSource = (data) =>
    apiService.get({
      method: 'POST',
      route: apiConstant.host + apiConstant.createSource,
      token: getCookie('csrf_access_token'),
      body: data
    });

  self.PaymentCheck = (data) =>
    apiService.get({
      method: 'POST',
      route: apiConstant.host + apiConstant.paymentCheck,
      token: getCookie('csrf_access_token'),
      body: data
    });

  self.getProductKey = (data) =>
    apiService.get({
      method: 'POST',
      route: apiConstant.host + apiConstant.getProduct,
      token: getCookie('csrf_access_token'),
      body: data
    });

  return self;
}