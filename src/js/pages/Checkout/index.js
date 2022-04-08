import React from 'react';
import { compose } from 'recompose';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
import NotificationSystem from 'react-notification-system';

import OrderListItem from './OrderListItem';
import BtnPrimary from '../../components/Buttons/BtnPrimary';
import {
  decreaseQuantity,
  increaseQuantity,
  removeOffer,
  resetQuantityCountError
} from '../../actions/Product';
import constants from '../../utils/constants';

import { addNotificationHelper } from '../../utils/helpers';

class CheckoutCart extends React.Component {
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.shippingCart.length === 0) {
      this.props.history.push('/home');
    }
    if (!this.props.quantityMoreError && this.props.quantityMoreError !== nextProps.quantityMoreError) {
      addNotificationHelper(this.refs.notificationSystem, constants.notification.error.quantityMoreError, 'error');
      this.props.resetQuantityCountError();
    }
    if (!this.props.quantityLessError && this.props.quantityLessError !== nextProps.quantityLessError) {
      addNotificationHelper(this.refs.notificationSystem, constants.notification.error.quantityLessError, 'error');
      this.props.resetQuantityCountError();
    }
  }

  calculateTotalPrice = () => {
    const { shippingCart } = this.props;
    const priceArr = shippingCart.map(offer => {
      return Number(offer.userInfo.price) * offer.quantity;
    });
    return priceArr.reduce((a, b) => a + b, 0).toFixed(2);
  };

  render() {
    const { shippingCart, increaseQuantity, decreaseQuantity, removeOffer } = this.props;
    return (
      <div className="my-4 pt-4 pb-5">
        <div className="container">
          <h4 className="font-spacing font-weight-normal">Order Details</h4>

          <div className="row my-4">
            <div className="col">
              <div className="order-list">
                {
                  !_.isEmpty(shippingCart) && shippingCart.map((offer, i) => {
                    return (
                      <OrderListItem
                        key={i}
                        offerDetail={offer}
                        increaseQuantity={increaseQuantity}
                        decreaseQuantity={decreaseQuantity}
                        removeOffer={removeOffer}
                      />
                    )
                  })
                }
              </div>
            </div>
          </div>
          <hr/>
          <div className="d-flex justify-content-end align-items-center">
            <div className="font-spacing">TOTAL AMOUNT:</div>
            <div className="h4 m-0 px-5">€{!_.isEmpty(shippingCart) && this.calculateTotalPrice()}</div>
          </div>
          <div className="d-flex justify-content-end my-5">
            {/* <button className="btn px-5 btn-primary btn-gradient font-spacing btn-lg" data-toggle="modal" data-target="#checkoutModal"><small>BUY KEYS</small></button> */}
            <Link to={"/checkout/form"}>
              <BtnPrimary content="Buy Keys"/>
            </Link>
          </div>
        </div>
        <NotificationSystem ref='notificationSystem' />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    shippingCart: state.product.items,
    quantityMoreError: state.product.quantityMoreError,
    quantityLessError: state.product.quantityLessError
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseQuantity: groupId => {
      dispatch(increaseQuantity(groupId));
    },
    decreaseQuantity: groupId => {
      dispatch(decreaseQuantity(groupId));
    },
    removeOffer: groupId => {
      dispatch(removeOffer(groupId));
    },
    resetQuantityCountError: () => {
      dispatch(resetQuantityCountError());
    }
  }
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(CheckoutCart);