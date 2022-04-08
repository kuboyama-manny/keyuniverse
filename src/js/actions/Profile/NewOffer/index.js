import * as ActionTypes from '../../../utils/actionType';
import { profileInfoService } from '../../../services';

export const isLoading = () => ({ type: ActionTypes.PROFILE_NEW_OFFER_LOADING });

export const isButtonLoading = () => ({ type: ActionTypes.BUTTON_PROFILE_NEW_OFFER_LOADING });

export const getAllGames = (history) => {
  return (dispatch, getState) => {
    dispatch(isLoading());
    return profileInfoService.getAllGames('true')
      .then(response => {
        dispatch(successGetAllGames(response.data.games));
      })
      .catch(error => {
        dispatch(failedGetAllGames(error.response));
        if (error.response.status === 401) {
          history.push('/login');
        }
      })
  }
};

export const successGetAllGames = (games) => {
  return {
    type: ActionTypes.SUCCESS_GET_ALL_GAMES,
    games
  }
};

export const failedGetAllGames = error => {
  return {
    type: ActionTypes.FAILED_GET_ALL_GAMES,
    error
  }
};

export const getSearchGames = (searchKey, history) => {
  return (dispatch, getState) => {
    dispatch(isLoading());
    return profileInfoService.getSearchGames(searchKey)
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

export const successGetSearchGames = (searchGames) => {
  return {
    type: ActionTypes.SUCCESS_SEARCH_GAMES,
    searchGames
  }
};

export const failedGetSearchGames = (error) => {
  return {
    type: ActionTypes.FAILED_SEARCH_GAMES,
    error
  }
};

export const selectGame = (selectedGame) => {
  return {
    type: ActionTypes.SELECT_GAME,
    selectedGame
  }
};

export const selectRegion = (selectedRegion) => {
  return {
    type: ActionTypes.SELECT_REGION,
    selectedRegion
  }
};

export const onChangePrice = price => {
  return {
    type: ActionTypes.CHANGE_PRICE,
    price
  }
};

export const toggleDonate = (donation) => {
  return {
    type: ActionTypes.TOGGLE_DONATE,
    donation
  }
};

export const toggleDonationAmount = (donationPercent) => {
  return {
    type: ActionTypes.TOGGLE_DONATION_AMOUNT,
    donationPercent
  }
};

export const addProductKey = () => {
  return {
    type: ActionTypes.ADD_PRODUCT_KEY
  }
};

export const removeProductKey = index => {
  return {
    type: ActionTypes.REMOVE_PRODUCT_KEY,
    index
  }
};

export const onChangeProductKey = (productKey, index) => {
  return {
    type: ActionTypes.CHANGE_PRODUCT_KEY,
    productKey,
    index
  }
};

export const saveAcceptedFileName = fileName => {
  return {
    type: ActionTypes.ACCEPTED_FILE_NAME,
    fileName
  }
};

export const uploadDocument = (formData, filename, history) => {
  return (dispatch, getState) => {
    return profileInfoService.uploadDocument(formData, filename, getProgress, dispatch)
      .then(response => {
        dispatch(successDocumentUpload(response.data, filename));
      })
      .catch(error => {
        dispatch(failedDocumentUpload(error.response));
        if (error.response.status === 401) {
          history.push('/login');
        }
      })
  }
};

export const getProgress = (progressVal, filename) => {
  return {
    type: ActionTypes.GET_PROGRESS_VALUE,
    progressVal,
    filename
  }
};

export const successDocumentUpload = (data, filename) => {
  return {
    type: ActionTypes.SUCCESS_DOCUMENT_UPLOAD,
    data,
    filename
  }
};

export const failedDocumentUpload = error => {
  return {
    type: ActionTypes.FAILED_DOCUMENT_UPLOAD,
    error
  }
};

export const createNewOffer = (offerDetail, history) => {
  return (dispatch, getState) => {
    dispatch(isButtonLoading());
    return profileInfoService.createNewOffer(offerDetail)
      .then(response => {
        dispatch(successCreateNewOffer(response.data));
      })
      .catch(error => {
        dispatch(failedCreateNewOffer(error.response));
        if (error.response.status === 401) {
          history.push('/login');
        }
      })
  }
};

export const successCreateNewOffer = data => {
  return {
    type: ActionTypes.SUCCESS_CREATE_NEW_OFFER,
    data
  }
};

export const failedCreateNewOffer = error => {
  return {
    type: ActionTypes.FAILED_CREATE_NEW_OFFER,
    error
  }
};

export const publishNewOffer = (detail, history) => {
  return (dispatch, getState) => {
    dispatch(isLoading());
    return profileInfoService.publishNewOffer(detail)
      .then(response => {
        dispatch(successPublishNewOffer(response.data));
      })
      .catch(error => {
        dispatch(dispatch(failedPublishNewOffer(error.response)));
        if (error.response.status === 401) {
          history.push('/login');
        }
      })
  }
};

export const successPublishNewOffer = data => {
  return {
    type: ActionTypes.SUCCESS_PUBLISH_NEW_OFFER,
    data
  }
};

export const failedPublishNewOffer = error => {
  return {
    type: ActionTypes.FAILED_PUBLISH_NEW_OFFER,
    error
  }
};

export const getUploadedDocuments = (groupId, history) => {
  return (dispatch, getState) => {
    dispatch(isLoading());
    return profileInfoService.getDocuments(groupId)
      .then(response => {
        dispatch(successGetUploadedDocuments(response.data))
      })
      .catch(error => {
        dispatch(failedGetUploadedDocuments(error.response));
        if (error.response.status === 401) {
          history.push('/login');
        }
      })
  }
};

export const successGetUploadedDocuments = data => {
  return {
    type: ActionTypes.SUCCESS_GET_UPLOADED_DOCUMENTS,
    data
  }
};

export const failedGetUploadedDocuments = error => {
  return {
    type: ActionTypes.FAILED_GET_UPLOADED_DOCUMENTS,
    error
  }
};

export const deleteUploadedDocument = (newFilename, originFileName, groupId, history) => {
  return (dispatch, getState) => {
    dispatch(isLoading());
    return profileInfoService.deleteDocument(newFilename, groupId)
      .then(response => {
        dispatch(successDeleteUploadedDocument(response.data, originFileName));
      })
      .catch(error => {
        dispatch(failedDeleteUploadedDocument(error.response));
        if (error.response.status === 401) {
          history.push('/login');
        }
      })
  }
};

export const successDeleteUploadedDocument = (data, filename) => {
  return {
    type: ActionTypes.SUCCESS_DELETE_UPLOADED_DOCUMENT,
    data,
    filename
  }
};

export const failedDeleteUploadedDocument = (error) => {
 return {
   type: ActionTypes.FAILED_DELETE_UPLOADED_DOCUMENT,
   error
 }
};

export const setOfferStatus = offer => {
  return {
    type: ActionTypes.SET_OFFER_STATUS,
    offer
  }
};

export const resetOfferStatus = () => {
  return {
    type: ActionTypes.RESET_OFFER_STATUS
  }
};