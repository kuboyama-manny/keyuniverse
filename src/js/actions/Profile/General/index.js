import * as ActionTypes from '../../../utils/actionType';
import { profileInfoService } from '../../../services';

export const isLoading = () => ({type: ActionTypes.GENERAL_API_LOADING});

export const getProfileInfo = (history) => {
  return (dispatch, getState) => {
    dispatch(isLoading());
    return profileInfoService.userGeneral()
      .then(response => {
        dispatch(successGetProfileInfo(response.data));
      })
      .catch(error => {
        dispatch(failedGetProfileInfo(error.response));
        if (error.response.status === 401) {
          history.push('/login');
        }
      })
  }
};

export const successGetProfileInfo = userData => {
  return {
    type: ActionTypes.SUCCESS_GET_USER_PROFILE_INFO,
    userData
  }
};

export const failedGetProfileInfo = error => {
  return {
    type: ActionTypes.FAILED_GET_USER_PROFILE_INFO,
    error
  }
};

export const setImageUrl = (src) => {
  return {
    type: ActionTypes.SET_IMAGE_URL,
    src
  }
};

export const handleCropChange = crop => {
  return {
    type: ActionTypes.HANDLE_CROP_CHANGE,
    crop
  }
};

export const setCroppedFile = file => {
  return {
    type: ActionTypes.SET_CROPPED_FILE,
    file
  }
};

export const onCloseModal = () => {
  return {
    type: ActionTypes.ON_CLOSE_MODAL
  }
};

export const updateProfilePicture = (history) => {
  return (dispatch, getState) => {
    let data = new FormData();
    const file = getState().profile.general.file;
    data.append('file', file, file.name);
    dispatch(isLoading());
    return profileInfoService.updateUserProfilePic(data)
      .then(response => {
        dispatch(successUpdateProfilePicture(response.data));
      })
      .catch(error => {
        dispatch(failedUpdateProfilePicture(error.response));
        if (error.response.status === 401) {
          history.push('/login');
        }
      })
  }
};

export const successUpdateProfilePicture = (data) => {
  return {
    type: ActionTypes.SUCCESS_UPDATE_PROFILE_PICTURE,
    data
  }
};

export const failedUpdateProfilePicture = (error) => {
  return {
    type: ActionTypes.FAILED_UPDATE_PROFILE_PICTURE,
    error
  }
};

