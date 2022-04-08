import React, { Component } from 'react';
import { compose } from 'recompose';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

import ProfileMain from '../../';
import DescriptionItem from '../../../../components/DescriptionItem';
import Badges from '../../../../components/Badges';
import BtnPrimaryOutline from '../../../../components/Buttons/BtnPrimaryOutline';
import UserAvatar from '../../../../components/Avatars/UserAvatar';
import Breadcrumbs from '../../../../components/Navigation/Breadcrumbs';
// import gameImg from '../../../../components/GameCard/GameCardImg/assets/game-thumbnail.png';

import { getPurchaseDetail } from '../../../../actions/Profile/PurchaseDetail';

import AjaxLoader from '../../../../components/AjaxLoader';
import Modal from '../../../../components/Modals/BaseModal';

class PurchaseDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeProduct: 0,
      isOpenModal: false
    }
  }

  componentDidMount() {
    this.props.getPurchaseDetail();
  }

  KeysContent = () => {
    const { purchaseDetail } = this.props;
    return (
      <div className="py-4">
        {
          !_.isEmpty(purchaseDetail) && purchaseDetail.map((purchase, i) => {
            return (
              <div className="d-flex align-items-center justify-content-start py-2" key={i}>
                <div className="font-weight-bold">Key {i + 1}:</div>
                <div className="ml-3">{purchase.details.offer.product_key}</div>
                <div className="ml-auto">
                  <BtnPrimaryOutline content="Report Issue" size={"sm"}/>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  };

  viewProductKey = (index) => {
    this.setState({ activeProduct: index }, () => {
      this.setState({ isOpenModal: true });
    })
  };

  closeViewProductKey = () => {
    this.setState({ isOpenModal: false });
  };

  render () {
    const { isOpenModal } = this.state;
    const { purchaseDetail } = this.props;
    return (
      <ProfileMain>
        <Link to={"/profile/purchases"}>
          <Breadcrumbs content="Go back to my purchases"/>
        </Link>
        {
          !_.isEmpty(purchaseDetail) && purchaseDetail.map((purchase, i) => {
            return (
              <div key={i} className="mb-4">
                <h4>Purchase #{purchase.id}</h4>
                <div className="d-flex align-items-start justify-content-start py-3">

                  <div className="col-sm-3 p-0 mr-3">
                    <img src={purchase.details.game.thumbnail} alt="" className="img-fluid rounded shadow-lg" data-aos="fade"/>
                  </div>
                  <div className="w-100 py-2">
                    <DescriptionItem title="Game" desc={purchase.details.game.title}/>
                    <DescriptionItem title="Region" desc={purchase.details.game.region || "International release"}/>
                    <DescriptionItem title="Seller" desc={purchase.details.offer.seller.username}/>
                    <DescriptionItem title="Date" desc={purchase.details.offer.date}/>
                    <DescriptionItem title="Price" desc={`€${Number(purchase.details.offer.price).toFixed(2)}`}/>
                    {
                      purchase.details.offer.donation_percent !== 0 && <DescriptionItem title="Donation" desc={`€${purchase.details.offer.donation_percent}`}/>
                    }
                  </div>
                </div>
                <h5 className="font-weight-normal font-spacing py-3">SOLD BY:</h5>
                <div className="d-flex align-items-center jutify-content-start">
                  <UserAvatar mainSellerData={purchase.details.offer.seller} size="md"/>
                  <div className="ml-4">
                    {/*<i>50 transactions</i>*/}
                    <div className="mt-2">
                      <Badges badges={purchase.details.offer.seller.badges}/>
                    </div>
                  </div>
                </div>
                <div data-toggle="modal" className="py-3">
                  <BtnPrimaryOutline
                    content="View Product Keys"
                    onClick={() => this.viewProductKey(i)}
                  />
                </div>
              </div>
            )
          })
        }
        <Modal
          title={'Product Keys'}
          open={isOpenModal}
          onCloseModal={this.closeViewProductKey}
        >
          { this.KeysContent()}
        </Modal>
        <AjaxLoader visible={this.props.loading}/>
      </ProfileMain>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.profile.purchaseDetail.loading,
    purchaseDetail: state.profile.purchaseDetail.purchaseDetail
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getPurchaseDetail: () => {
      dispatch(getPurchaseDetail(ownProps.match.params.id, ownProps.history));
    }
  }
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(PurchaseDetail);
