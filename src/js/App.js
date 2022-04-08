import React, {Component} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router';

import AOS from 'aos';

// PrivateRoute
import PrivateRoute from './pages/PrivateRoute';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

// Purchases
import Purchases from './pages/Profile/Purchases';
import PurchaseDetail from './pages/Profile/Purchases/PurchaseDetail';
// Offers
import MyOffers from './pages/Profile/Offers';
import NewOffer from './pages/Profile/Offers/NewOffer';
import OfferDetail from './pages/Profile/Offers/OfferDetail';
// Bank Accounts
import BankAccounts from './pages/Profile/BankAccounts';
import NewBankAccount from './pages/Profile/BankAccounts/NewBankAccount';

// Profile
import ProfileGeneral from './pages/Profile/General';
import ProfilePassword from './pages/Profile/Password';
import PublicProfile from './pages/Profile/PublicProfile';
import SearchPage from './pages/SearchPage';
import ProductPage from './pages/ProductPage';
import Checkout from './pages/Checkout';
import CheckoutForm from './pages/Checkout/CheckoutForm';
import CheckoutStatus from './pages/Checkout/CheckoutStatus';
import CheckoutSuccess from './pages/Checkout/CheckoutSuccess';
import ProfileWallet from './pages/Profile/Wallet';

// Support Tickets
import Support from './pages/Profile/Support';
// 
import TermsConditions from './pages/TermsConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';

// Not Found page
import NotFound from './pages/NotFoundPage';

import MainNav from './components/MainNav';
import Footer from './components/Footer';

import ScrollTop from './components/ScrollTop';

class AppContainer extends Component {
  componentDidMount() {
    AOS.init({
      offset: 50,
      duration: 600,
      easing: 'ease-in-out-sine',
      delay: 100,
    })
  }

  render() {
    return (
      <Router>
        <ScrollTop>
          <div>
            <MainNav/>

            <Switch>
              <Route exact path='/' component={HomePage}/>
              <Route path='/home' component={HomePage}/>
              {/* Profile */}
              <PrivateRoute path='/profile/general' component={ProfileGeneral}/>
              <Route path='/public-profile' component={PublicProfile}/>
              <PrivateRoute path='/profile/change-password' component={ProfilePassword}/>
              <PrivateRoute path='/profile/purchases/my-purchases' component={Purchases}/>
              <PrivateRoute path='/profile/purchase/:id' component={PurchaseDetail}/>
              <PrivateRoute path='/profile/offers/my-offers' component={MyOffers}/>
              <PrivateRoute path='/profile/offers/new' component={NewOffer}/>
              <PrivateRoute path='/profile/offer/:id' component={OfferDetail}/>
              <PrivateRoute path='/profile/accounts/my-accounts' component={BankAccounts}/>
              <PrivateRoute path='/profile/accounts/new' component={NewBankAccount}/>
              <PrivateRoute path='/profile/wallet' component={ProfileWallet}/>

              <Route path='/search' component={SearchPage}/>
              <Route path='/login' component={LoginPage}/>
              <Route path='/register' component={SignUpPage}/>

              <Route exact path='/product/:title' component={ProductPage}/>

              <PrivateRoute path='/checkout/cart' component={Checkout}/>
              <PrivateRoute path='/checkout/form' component={CheckoutForm}/>
              <PrivateRoute path='/checkout/status' component={CheckoutStatus}/>
              <PrivateRoute path='/checkout/success' component={CheckoutSuccess}/>

              <Route path='/terms-and-conditions' component={TermsConditions}/>
              <Route path='/privacy-policy' component={PrivacyPolicy}/>

              <Route path='/support' component={Support}/>

              {/* not found page */}
              <Route path='*' component={NotFound}/>
            </Switch>

            <Footer/>
          </div>
        </ScrollTop>
      </Router>
    );
  }
}

export default AppContainer;