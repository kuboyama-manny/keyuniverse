import React from 'react';
import { compose } from 'recompose';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
import NotificationSystem from 'react-notification-system';

import UserAvatar from '../../components/Avatars/UserAvatar';
import Breadcrumbs from '../../components/Navigation/Breadcrumbs';
import Badges from '../../components/Badges';
import SellersList from '../../components/SellersList';
import ProductFeatures from './ProductFeatures';
import ProductDetails from './ProductDetails';
import SystemRequirements from './SystemRequirements';

import AjaxLoader from '../../components/AjaxLoader';
import { addNotificationHelper } from '../../utils/helpers';

import {
  getProductInfo,
  getCurrentSellers,
  addToCart,
  resetQuantityCountError
} from '../../actions/Product';
import constants from '../../utils/constants';


class ProductPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedImage: 0
    }
  }

  componentDidMount() {
    this.props.getCurrentSellers(this.props.match.params.title);
    this.props.getProductInfo(this.props.match.params.title);
  }

  UNSAFE_componentWillReceiveProps(nextProps, nextState) {
    if (!this.props.addToCartError && this.props.addToCartError !== nextProps.addToCartError) {
      addNotificationHelper(this.refs.notificationSystem, constants.notification.error.addToCartError, 'error');
      this.props.resetQuantityCountError();
    }
    if (!this.props.addToCardSuccess && this.props.addToCardSuccess !== nextProps.addToCardSuccess) {
      addNotificationHelper(this.refs.notificationSystem, constants.notification.success.addToCardSuccess, 'success');
      this.props.resetQuantityCountError();
    }
  }

  showSelectImage = num => this.setState({ selectedImage: num });

  render() {
    const { selectedImage } = this.state;
    const { productData, currentSellers, addToCart, shippingCart } = this.props;
    return (
      <div className="product-page">
        {productData &&
        <div className="container">
          <Link to={'/'}>
            <Breadcrumbs content="Go back to the main page"/>
          </Link>
          <div className="row pb-5">
            <div className="col-sm-5 image-section">
              <div className="product-images">
                <div className="product-main-card">
                  <div className="main-image">
                    <img src={productData.images[selectedImage]} className="img-fluid shadow-lg mb-4 product-game-image" alt="" data-aos="fade"/>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  {productData.images.map((image, i) => {
                    return (
                      <img src={image} alt="" className="clickable" key={i} onClick={() => this.showSelectImage(i)}/>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-sm-7">
              <div className="row">
                <div className="col-sm-8">
                  <h1>{productData.title}</h1>
                  <div className="py-2">
                    <UserAvatar mainSellerData={productData.main_seller}/>
                  </div>

                  {
                    !_.isEmpty(productData.main_seller.badges) &&
                    <Badges badges={productData.main_seller.badges} size="sm" main={true}/>
                  }
                </div>
                <div className="col-sm-4">
                  <p className="h1">€{productData.main_price}</p>
                  <small><strong>{productData.main_price_donation + '%'}</strong> of this sale is going to their
                    selected charity!
                  </small>
                  <div className="mb-3 mt-4">
                    <span className="font-weight-bold">AVAILABLE KEYS: {productData.main_seller.available_keys}</span>
                    <button data-aos="fade" className="mt-4 btn btn-block btn-primary btn-gradient font-spacing btn-lg" onClick={() => addToCart(productData.main_seller.group_id)}>
                      <small>ADD TO CART</small>
                    </button>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <p className="lead">DESCRIPTION</p>
                  <p>{productData.description_long}</p>
                  <a className="btn-link" href="">READ MORE</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-sm-5">
              <ProductFeatures features={productData.features}/>
              <ProductDetails details={productData.details}/>
              <SystemRequirements requirements={productData.requirements}/>
            </div>
            <div className="col-sm-7">
              <h4 className="font-spacing font-weight-normal">CURRENT SELLERS</h4>
              <p> View all offers for <strong>{productData.title}</strong> here:</p>
              {
                !_.isEmpty(currentSellers) &&
                <SellersList
                  currentSellers={currentSellers}
                  addToCart={addToCart}
                  shippingCart={shippingCart}
                />
              }
            </div>
          </div>
        </div>
        }
        <AjaxLoader visible={this.props.loading}/>
        <NotificationSystem ref='notificationSystem' />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.product.loading,
    productData: state.product.productData,
    currentSellers: state.product.currentSellers,
    shippingCart: state.product.items,
    addToCartError: state.product.addToCartError,
    addToCardSuccess: state.product.addToCardSuccess
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getProductInfo: (safe_url) => {
      dispatch(getProductInfo(safe_url, ownProps.history));
    },
    getCurrentSellers: (safe_url) => {
      dispatch(getCurrentSellers(safe_url, ownProps.history));
    },
    addToCart: groupId => {
      dispatch(addToCart(groupId));
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
)(ProductPage);
