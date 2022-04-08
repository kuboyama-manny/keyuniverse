const keyUniverseConstants = {
  api: {
    host: process.env.API_BASE,
    game: 'game',
    homepage: 'homepage',
    currentSellers: 'offers',
    authRegister: 'auth/register',
    authLogin: 'auth/login',
    authLogout1: 'auth/logout',
    authLogout2: 'auth/logout2',
    userGeneral: 'user/profile',
    userOffers: 'user/offers',
    allGames: 'all_games',
    searchGames: 'search_game',
    getDocuments: 'user/offer/documents-check',
    uploadDocument: 'user/offer/documents',
    deleteDocument: 'user/offer/delete/documents',
    createNewOffer: 'user/offer/new',
    updateNewOffer: 'user/offer/update',
    publishNewOffer: 'user/offer/submit',
    getPurchases: 'user/purchases',
    createSource: 'payment/begin',
    paymentCheck: 'payment/check',
    getProduct: 'payment/success',
    updateProfilePic: 'user/update/profile-pic',
    getTransactions: 'user/wallet',
    getOfferDetail: 'user/offer/details',
    searchedGames: 'search',
    getPurchaseDetail: '/user/purchase/details'
  },
  notification: {
    error: {
      newOfferFirstStepError: 'There is no selected game! please select a game',
      newOfferSecondStepError: 'Could you please fill up all forms correctly?',
      newOfferThirdStepError: 'There is no any added key! please add product keys',
      newOfferFourthStepError: 'There is no any uploaded document! please upload the documents',
      addProductKeyError: 'We only allow a maximum of 10 keys per offer',
      quantityMoreError: 'Quantity was reached out to available keys',
      quantityLessError: 'Quantity should be at least more than 1',
      emptyShippingCartError: 'There is no any offer. please add the offer into Cart',
      addToCartError: 'This offer has already added to Cart.',
      invalidEmailError: 'Email address format is incorrect! please type correct email',
      invalidUserError: 'User details are incorrect! please type correct information'
    },
    success: {
      addToCardSuccess: 'Offer has been added to your cart'
    },
    warning: {

    },
    info: {

    }
  }
};

export default keyUniverseConstants;
