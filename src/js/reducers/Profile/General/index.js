import _ from 'lodash';
import * as ActionTypes from '../../../utils/actionType';

const initialState = {
  loading: false,
  generalData: null,
  openModal: false,
  openCrop: false,
  crop: {
    x: 0,
    y: 0,
    aspect: 1,
    width: 20,
    height: 20
  },
  src: '',
  file: null,
  fileName: ''
};

const reducer = (state = initialState, action) => {
  let newState = _.cloneDeep(state);
  switch (action.type) {
    case ActionTypes.GENERAL_API_LOADING:
      newState.loading = true;
      return newState;

    case ActionTypes.SUCCESS_GET_USER_PROFILE_INFO:
      newState.loading = false;
      newState.generalData = action.userData;
      return newState;

    case ActionTypes.FAILED_GET_USER_PROFILE_INFO:
      newState.loading = false;
      return newState;

    case ActionTypes.SET_IMAGE_URL:
      newState.src = action.src;
      newState.openModal = true;
      newState.openCrop = true;
      return newState;

    case ActionTypes.SET_CROPPED_FILE:
      newState.file = action.file;
      return newState;

    case ActionTypes.HANDLE_CROP_CHANGE:
      newState.crop = action.crop;
      return newState;

    case ActionTypes.ON_CLOSE_MODAL:
      newState.src = '';
      newState.openModal = false;
      newState.openCrop = false;
      return newState;

    case ActionTypes.SUCCESS_UPDATE_PROFILE_PICTURE:
      newState.src = '';
      newState.openModal = false;
      newState.openCrop = false;
      newState.loading = false;
      return newState;

    case ActionTypes.FAILED_UPDATE_PROFILE_PICTURE:
      newState.src = '';
      newState.openModal = false;
      newState.openCrop = false;
      newState.loading = false;
      return newState;

    default:
      return state;
  }
};

export default reducer;