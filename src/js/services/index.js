import axios from 'axios';
import ApiService from './api';
import AuthInfoService from './authInfo';
import HomeInfoService from './homeInfo';
import ProductInfoService from './productInfo';
import ProfileInfoService from './profileInfo';
import CheckOutInfoService from './checkouInfo';

const apiService = ApiService(axios);
const authInfoService = AuthInfoService(apiService);
const homeInfoService = HomeInfoService(apiService);
const productInfoService = ProductInfoService(apiService);
const profileInfoService = ProfileInfoService(apiService);
const checkoutInfoService = CheckOutInfoService(apiService);

export {
  apiService,
  authInfoService,
  homeInfoService,
  productInfoService,
  profileInfoService,
  checkoutInfoService
};
