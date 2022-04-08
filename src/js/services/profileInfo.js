import constants from '../utils/constants';
import { getCookie } from '../utils/helpers';

export default function (apiService) {
  const self = {};
  const apiConstant = constants.api;

  self.userGeneral = () =>
    apiService.get({
      method: 'GET',
      route: apiConstant.host + apiConstant.userGeneral
    });

  self.userOffers = () =>
    apiService.get({
      method: 'GET',
      route: apiConstant.host + apiConstant.userOffers
    });

  self.getAllGames = (activeStatus) =>
    apiService.get({
      method: 'GET',
      route: apiConstant.host + apiConstant.allGames,
      queryParams: { active: activeStatus }
    });

  self.getSearchGames = (searchKey) =>
    apiService.get({
      method: 'GET',
      route: apiConstant.host + apiConstant.searchGames,
      queryParams: { key: searchKey }
    });

  self.uploadDocument = (data, filename, getProgress, dispatch) =>
    apiService.upload({
      method: 'POST',
      route: apiConstant.host + apiConstant.uploadDocument,
      token: getCookie('csrf_access_token'),
      body: data,
      filename,
      getProgress,
      dispatch
    });

  self.createNewOffer = (data) =>
    apiService.get({
      method: 'POST',
      route: apiConstant.host + apiConstant.createNewOffer,
      token: getCookie('csrf_access_token'),
      body: data
    });

  self.publishNewOffer = data =>
    apiService.get({
      method: 'POST',
      route: apiConstant.host + apiConstant.publishNewOffer,
      token: getCookie('csrf_access_token'),
      body: data
    });

  self.getDocuments = (groupId) =>
    apiService.get({
      method: 'GET',
      route: apiConstant.host + apiConstant.getDocuments,
      queryParams: { group_id: groupId }
    });

  self.deleteDocument = (filename, groupId) =>
    apiService.get({
      method: 'DELETE',
      route: apiConstant.host + apiConstant.deleteDocument,
      token: getCookie('csrf_access_token'),
      body: {
        filename: filename,
        group_id: groupId
      }
    });

  self.getPurchases = () =>
    apiService.get({
      method: 'GET',
      route: apiConstant.host + apiConstant.getPurchases
    });

  self.updateUserProfilePic = (data) =>
    apiService.upload({
      method: 'POST',
      route: apiConstant.host + apiConstant.updateProfilePic,
      token: getCookie('csrf_access_token'),
      body: data
    });

  self.getTransactions = () =>
    apiService.get({
      method: 'GET',
      route: apiConstant.host + apiConstant.getTransactions
    });

  self.getOfferDetail = (groupId) =>
    apiService.get({
      method: 'GET',
      route: apiConstant.host + apiConstant.getOfferDetail,
      queryParams: { group_id: groupId }
    });

  self.getPurchaseDetail = paymentId =>
    apiService.get({
      method: 'POST',
      route: apiConstant.host + apiConstant.getPurchaseDetail,
      token: getCookie('csrf_access_token'),
      body: {
        payment_id: paymentId
      }
    });

  return self;
}