import _ from 'lodash';
import * as ActionTypes from '../../../utils/actionType';

const initialState = {
  loading: false,
  buttonLoading: false,
  gameName: '',
  productName: '',
  region: 'GLOBAL',
  groupId: '',
  price: '0',
  donation: false,
  donationPercent: '0',
  productKeys: [''],
  safeUrl: '',
  allGames: [],
  searchGames: [],
  uploadProgressVal: {},
  acceptedFileName: [],
  uploadedFileName: [],
  createOfferStatus: false,
  isDraftOffer: false
};

const reducer = (state = initialState, action) => {
  let newState = _.cloneDeep(state);
  switch (action.type) {
    case ActionTypes.PROFILE_NEW_OFFER_LOADING:
      newState.loading = true;
      return newState;

    case ActionTypes.BUTTON_PROFILE_NEW_OFFER_LOADING:
      newState.buttonLoading = true;
      return newState;

    case ActionTypes.SUCCESS_GET_ALL_GAMES:
      newState.allGames = action.games;
      newState.loading = false;
      return newState;

    case ActionTypes.FAILED_GET_ALL_GAMES:
      newState.loading = false;
      return newState;

    case ActionTypes.SUCCESS_SEARCH_GAMES:
      newState.searchGames = action.searchGames;
      newState.loading = false;
      return newState;

    case ActionTypes.FAILED_SEARCH_GAMES:
      newState.loading = false;
      return newState;

    case ActionTypes.SELECT_GAME:
      newState.gameName = action.selectedGame.label;
      newState.productName = action.selectedGame.value;
      newState.safeUrl = action.selectedGame.value;
      return newState;

    case ActionTypes.SELECT_REGION:
      newState.region = action.selectedRegion;
      return newState;

    case ActionTypes.CHANGE_PRICE:
      newState.price = action.price;
      return newState;

    case ActionTypes.TOGGLE_DONATE:
      if (action.donation === 'yes') {
        newState.donation = true;
      } else if (action.donation === 'no') {
        newState.donation = false;
        newState.donationPercent = '0'
      }
      return newState;

    case ActionTypes.TOGGLE_DONATION_AMOUNT:
      newState.donationPercent = action.donationPercent;
      return newState;

    case ActionTypes.ADD_PRODUCT_KEY:
      let addProductKeyArr = newState.productKeys;
      addProductKeyArr.push('');
      return newState;

    case ActionTypes.REMOVE_PRODUCT_KEY:
      let removeProductKeyArr = newState.productKeys;
      removeProductKeyArr.splice(action.index, 1);
      return newState;

    case ActionTypes.CHANGE_PRODUCT_KEY:
      newState.productKeys[action.index] = action.productKey;
      return newState;

    case ActionTypes.GET_PROGRESS_VALUE:
      const uploadingProgress = { [action.filename]: action.progressVal };
      Object.assign(newState.uploadProgressVal, uploadingProgress);
      return newState;

    case ActionTypes.ACCEPTED_FILE_NAME:
      let fileNames  = newState.acceptedFileName;
      if (fileNames.indexOf(action.fileName) < 0) {
        fileNames.push(action.fileName);
      }
      return newState;

    case ActionTypes.SUCCESS_CREATE_NEW_OFFER:
      newState.buttonLoading = false;
      newState.groupId = action.data.group_id;
      return newState;

    case ActionTypes.FAILED_CREATE_NEW_OFFER:
      newState.buttonLoading = false;
      return newState;

    case ActionTypes.SUCCESS_DOCUMENT_UPLOAD:
      const newUploadedFile = { [action.filename]: action.data.filename[0] };
      newState.uploadedFileName.push(newUploadedFile);
      return newState;

    case ActionTypes.FAILED_DOCUMENT_UPLOAD:
      return newState;

    case ActionTypes.SUCCESS_PUBLISH_NEW_OFFER:
      newState.createOfferStatus = true;
      newState.loading = false;
      return newState;

    case ActionTypes.FAILED_PUBLISH_NEW_OFFER:
      newState.loading = false;
      return newState;

    case ActionTypes.SUCCESS_GET_UPLOADED_DOCUMENTS:
      newState.loading = false;
      newState.uploadedFileName = action.data.documents;
      if (action.data.documents.length > 0) {
        for (let file of action.data.documents) {
          const uploadingProgress = { [Object.keys(file)[0]]: 100 };
          Object.assign(newState.uploadProgressVal, uploadingProgress);
          if (newState.acceptedFileName.indexOf(Object.keys(file)[0]) < 0) {
            newState.acceptedFileName.push(Object.keys(file)[0]);
          }
        }
      }
      return newState;

    case ActionTypes.FAILED_GET_UPLOADED_DOCUMENTS:
      newState.loading = false;
      return newState;

    case ActionTypes.SUCCESS_DELETE_UPLOADED_DOCUMENT:
      newState.loading = false;
      const newAcceptedFileName = newState.acceptedFileName.filter(filename => filename !== action.filename);
      newState.acceptedFileName = newAcceptedFileName;
      const newUploadedFileName = newState.uploadedFileName.filter(file => Object.keys(file)[0] !== action.filename);
      newState.uploadedFileName = newUploadedFileName;
      delete newState.uploadProgressVal[action.filename];
      return newState;

    case ActionTypes.FAILED_DELETE_UPLOADED_DOCUMENT:
      newState.loading = false;
      return newState;

    case ActionTypes.SET_OFFER_STATUS:
      newState.isDraftOffer = true;
      newState.gameName = action.offer.title;
      newState.productName = action.offer.safe_url;
      newState.region = action.offer.region;
      newState.groupId = action.offer.group_id;
      newState.price = action.offer.price;
      newState.donation = action.offer.donation;
      newState.donationPercent = action.offer.donation_percent;
      newState.productKeys = action.offer.product_key;
      newState.safeUrl = action.offer.safe_url;
      newState.uploadedFileName = action.offer.documents;
      if (action.offer.documents.length > 0) {
        for (let file of action.offer.documents) {
          const uploadingProgress = { [Object.keys(file)[0]]: 100 };
          Object.assign(newState.uploadProgressVal, uploadingProgress);
          if (newState.acceptedFileName.indexOf(Object.keys(file)[0]) < 0) {
            newState.acceptedFileName.push(Object.keys(file)[0]);
          }
        }
      }
      return newState;

    case ActionTypes.RESET_OFFER_STATUS:
      newState.gameName = '';
      newState.productName = '';
      newState.region = 'GLOBAL';
      newState.groupId = '';
      newState.price = '0';
      newState.donation = false;
      newState.donationPercent = '0';
      newState.productKeys = [''];
      newState.safeUrl = '';
      newState.uploadProgressVal = {};
      newState.acceptedFileName = [];
      newState.uploadedFileName = [];
      newState.createOfferStatus = false;
      newState.isDraftOffer = false;
      return newState;

    default:
      return state;
  }
};

export default reducer;