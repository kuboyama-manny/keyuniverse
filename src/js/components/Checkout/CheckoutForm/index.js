import React from 'react';
import { Link } from 'react-router-dom';
import FaIcon from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/fontawesome-free-solid';
import {
  faBitcoin,
  faCcPaypal
} from '@fortawesome/fontawesome-free-brands';
import { injectStripe } from 'react-stripe-elements';
import _ from 'lodash';

import Breadcrumbs from '../../../components/Navigation/Breadcrumbs';
import BtnPrimary from '../../../components/Buttons/BtnPrimary';
import iconGuaranteed from './assets/icon-guaranteed.png';
import iconSecurity from './assets/icon-security.png';

import PayPal from './PayPal';
import BitCoin from './BitCoin';
import CreditCard from './CreditCard';
import BillAddress from './BillAddress';


class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      payMethod: 'CC'
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!this.props.isHandlePayment && this.props.isHandlePayment !== nextProps.isHandlePayment) {
      this.props.history.push('/checkout/status');
    }
  }

  handleSubmit = (e) => {
    const { handlePayment, stripe } = this.props;
    e.preventDefault();
    handlePayment(stripe);
  };

  calculateTotalPrice = () => {
    const { shippingCart } = this.props;
    const priceArr = shippingCart.map(offer => {
      return Number(offer.userInfo.price) * offer.quantity;
    });
    return priceArr.reduce((a, b) => a + b, 0).toFixed(2);
  };

  calculateOrderDetail = () => {
    const { shippingCart } = this.props;
    return shippingCart.map(offer => {
      return {
        gameTitle: offer.userInfo.game.title,
        price: offer.userInfo.price,
        quantity: offer.quantity
      }
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Link to={'/checkout/cart'}>
                <Breadcrumbs content="Go back to order details"/>
              </Link>
              <div className="row">
                <div className="col-sm-8">
                  <h3>Checkout form</h3>
                  <p>All transactions are secure and encripted. Credit card information is never stored.</p>

                  <form onSubmit={this.handleSubmit}>
                    <h5 className="font-weight-normal font-spacing pt-4 pb-2">PAYMENT METHOD</h5>

                    <div className="form-group mb-5">
                      <div className="custom-control custom-radio my-2">
                        <input type="radio" onChange={() => this.setState({payMethod: "PP"})} id="customRadio1"
                               name="customRadio" className="custom-control-input"/>
                        <label className="custom-control-label " htmlFor="customRadio1">
                          <span className="h5 font-weight-light mr-2"><FaIcon icon={faCcPaypal}/></span> Paypal
                        </label>
                      </div>
                      <div className="custom-control custom-radio my-2">
                        <input type="radio" onChange={() => this.setState({payMethod: "BTC"})} id="customRadio2"
                               name="customRadio" className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="customRadio2">
                          <span className="h5 font-weight-light mr-3"><FaIcon icon={faBitcoin}/></span>
                          Bitcoin</label>
                      </div>
                      <div className="custom-control custom-radio my-2">
                        <input type="radio" defaultChecked onChange={() => this.setState({payMethod: "CC"})}
                               id="customRadio3" name="customRadio" className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="customRadio3">
                          <span className="h5 font-weight-light mr-2"><FaIcon icon={faCreditCard}/> </span>
                          Credit Card
                        </label>
                      </div>
                    </div>

                    {/* If PayPal */}
                    { this.state.payMethod === 'PP' && <PayPal /> }
                    {/* If BitCoin */}
                    { this.state.payMethod === 'BTC' && <BitCoin /> }
                    {/* If CreditCard */}
                    {this.state.payMethod === 'CC' && <CreditCard {...this.props} /> }

                    <BillAddress {...this.props} />

                    <div className="form-row my-4 d-flex justify-content-end">
                      <BtnPrimary
                        content="Continue"
                        onClick={this.handleSubmit}
                      />
                    </div>
                  </form>


                </div>
                <div className="col-sm-4">
                  <div className="card bg-secondary" data-aos="fade">
                    <div className="card-body">
                      <h4 className="font-spacing font-weight-normal py-3">ORDER SUMARY</h4>
                      {
                        !_.isEmpty(this.calculateOrderDetail()) && this.calculateOrderDetail().map((order, i) => {
                          return (
                            <div className="d-flex justify-content-between align-items-baseline my-3" key={i}>
                              <div className="d-flex flex-column">
                                <span className="font-weight-bold">{order.gameTitle}</span>
                                {order.quantity} {order.quantity === 1 ? 'key' : 'keys'}
                              </div>
                              <span className="font-weight-bold">€{order.price}</span>
                            </div>
                          )
                        })
                      }
                    </div>
                    <div className="card-footer d-flex justify-content-end py-4">
                      <span className="font-weight-normal mr-2">TOTAL:</span> <span
                      className="h4 m-0 font-weight-bold">€{this.calculateTotalPrice()}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row pt-4">
                <div className="col-sm-4">
                  <div className="card bg-secondary text-center ">
                    <div className="card-body px-4 py-5">
                      <img src={iconGuaranteed} alt="" data-aos="fade-down"/>
                      <h5 className="mb-2 mt-3">Guarantee</h5>
                      <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non massa turpis. In non
                        bibendum erat. Duis pulvinar vulputate ligula a rhoncus.
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="card bg-secondary text-center">
                    <div className="card-body px-4 py-5">
                      <img src={iconSecurity} alt="" data-aos="fade-down"/>
                      <h5 className="mb-2 mt-3">Secure</h5>
                      <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non massa turpis. In non
                        bibendum erat. Duis pulvinar vulputate ligula a rhoncus.
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="card bg-secondary text-center">
                    <div className="card-body px-4 py-5">
                      <img src={iconGuaranteed} alt="" data-aos="fade-down"/>
                      <h5 className="mb-2 mt-3">Trusted</h5>
                      <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non massa turpis. In non
                        bibendum erat. Duis pulvinar vulputate ligula a rhoncus.
                      </small>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default injectStripe(CheckoutForm);