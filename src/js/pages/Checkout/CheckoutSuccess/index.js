import React from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

import DescriptionItem from '../../../components/DescriptionItem';
import BtnPrimaryOutline from '../../../components/Buttons/BtnPrimaryOutline';
import UserAvatar from '../../../components/Avatars/UserAvatar';

import { getProductKey } from '../../../actions/Checkout';

class CheckoutSuccess extends React.Component {
  componentDidMount() {
    this.props.getProductKey();
  }

  render () {
    const { gotDate, orders } = this.props;
    return (
      <div className="my-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Thank you for the order!</h1>
              <p>We would like to thank you for your purchase, it really means something!</p>
              <p>You can get your keys now or check it later in your Dashboard in My Purchases tab. Also we want to
                mention that you only have <strong>14 days to activate</strong> the key and informs us about their work.
              </p>
              <div className="row">
                <div className="col-sm-4">
                  <dl className="row">
                    <dt className="col-3">Order:</dt>
                    <dd className="col-9">#1009</dd>
                    <dt className="col-3">Date:</dt>
                    <dd className="col-9">{ gotDate }</dd>
                  </dl>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-10 m-auto">
                  {
                    !_.isEmpty(orders) && orders.map((order, i) => {
                      return (
                        <div className="card mb-4 bg-transparent border-light shadow-lg" data-aos="fade" key={i}>
                          <div className="card-header d-flex justify-content-between">
                            <h5 className="card-title m-0">{order.game_title}</h5>
                            <h5 className="m-0">€ {order.price}</h5>
                          </div>
                          <div className="d-flex justify-content-between mt-3">
                            <div className="card-title m-0 col-2">
                              <img src={order.game_thumbnail} alt="" className="w-100" />
                            </div>
                            <div className="col-10 d-flex flex-column">
                              <div className="d-flex justify-content-between">
                                <div className="mr-2 p-0">
                                  <UserAvatar mainSellerData={order.seller} />
                                </div>
                                <div>
                                  <BtnPrimaryOutline content="Report Issue"/>
                                </div>
                              </div>
                              <div className="d-flex w-100 justify-content-between">
                                <div className="w-100 container">
                                  <DescriptionItem title="Activation Keys" desc={''}/>
                                  <div className="product-keys d-flex flex-wrap">
                                    {
                                      order.product_keys.map((productKey, i) => {
                                        return (
                                          <span key={i} className="product-key mr-2 px-1 py-0">{productKey}</span>
                                        )
                                      })
                                    }
                                  </div>
                                  <DescriptionItem title="Invoice ID" desc="#000000"/>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    gotDate: state.checkout.gotDate,
    orders: state.checkout.orders
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getProductKey: () => {
      dispatch(getProductKey(ownProps.history));
    }
  };
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(CheckoutSuccess);