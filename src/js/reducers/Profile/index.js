import { combineReducers } from 'redux';
import general from './General';
import offers from './Offers';
import newOffer from './NewOffer';
import purchases from './Purchases';
import wallet from './Wallet';
import offerDetail from './OfferDetail';
import purchaseDetail from './PurchaseDetail';

const reducers = combineReducers({
  general,
  offers,
  newOffer,
  purchases,
  wallet,
  offerDetail,
  purchaseDetail
});

export default reducers;