import React from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Elements } from 'react-stripe-elements';
import CheckoutForm from '../../../components/Checkout/CheckoutForm';
import {
  createSource,
  onChangeCardDetail,
  onChangeAddress1,
  onChangeAddress2,
  onChangeCountry,
  onChangeCity,
  onChangePostalCode,
  handlePayment
} from '../../../actions/Checkout';

import AjaxLoader from '../../../components/AjaxLoader';

class CheckoutFormContainer extends React.Component {
  render() {
    return (
      <div>
        <Elements>
          <CheckoutForm {...this.props} />
        </Elements>
        <AjaxLoader visible={this.props.loading} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.checkout.loading,
    address: state.checkout.address,
    isHandlePayment: state.checkout.isHandlePayment,
    shippingCart: state.product.items
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createSource: () => {
      dispatch(createSource(ownProps.history))
    },
    onChangeCardDetail: element => {
      dispatch(onChangeCardDetail(element));
    },
    handlePayment: stripe => {
      dispatch(handlePayment(stripe, ownProps.history));
    },
    onChangeAddress1: e => {
      dispatch(onChangeAddress1(e.currentTarget.value));
    },
    onChangeAddress2: e => {
      dispatch(onChangeAddress2(e.currentTarget.value));
    },
    onChangeCountry: e => {
      dispatch(onChangeCountry(e.currentTarget.value));
    },
    onChangeCity: e => {
      dispatch(onChangeCity(e.currentTarget.value));
    },
    onChangePostalCode: e => {
      dispatch(onChangePostalCode(e.currentTarget.value));
    }
  }
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(CheckoutFormContainer);