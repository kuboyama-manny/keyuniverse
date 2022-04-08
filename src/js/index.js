import React from 'react';
import ReactDOM from 'react-dom';
import { StripeProvider } from 'react-stripe-elements';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../scss/app.scss';
import 'bootstrap';
import {Provider} from 'react-redux';
import store from './store';

ReactDOM.render(
  <StripeProvider apiKey={process.env.STRIPE_KEY1} betas={['payment_intent_beta_3']}>
    <Provider store={store}>
      <App/>
    </Provider>
  </StripeProvider>,
  document.getElementById('root'));
registerServiceWorker();

