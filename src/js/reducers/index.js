import { combineReducers } from 'redux';
import auth from './Auth';
import home from './Home';
import profile from './Profile';
import product from './Product';
import checkout from './Checkout';

const RootReducer = combineReducers({
  auth,
  home,
  profile,
  product,
  checkout
});

export default RootReducer;