import constants from '../utils/constants';
import { getCookie } from '../utils/helpers';

export default function (apiService) {
  const self = {};
  const apiConstant = constants.api;

  self.AuthRegister = ({username, password, email}) =>
    apiService.get({
      method: 'POST',
      route: apiConstant.host + apiConstant.authRegister,
      body: {
        username,
        password,
        email
      }
    });

  self.AuthLogin = ({email, password}) =>
    apiService.get({
      method: 'POST',
      route: apiConstant.host + apiConstant.authLogin,
      body: {
        email,
        password
      }
    });

  self.AuthLogout1 = () =>
    apiService.get({
      method: 'DELETE',
      route: apiConstant.host + apiConstant.authLogout1,
      token: getCookie('csrf_access_token')
    });

  self.AuthLogout2 = () =>
    apiService.get({
      method: 'DELETE',
      route: apiConstant.host + apiConstant.authLogout2,
      token: getCookie('csrf_refresh_token')
    });

  return self;
}