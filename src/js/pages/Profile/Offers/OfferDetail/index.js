import React from 'react';
import { compose } from 'recompose';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

import ProfileMain from '../../';
import BtnLink from '../../../../components/Buttons/BtnLink';
import KeysDetail from './KeysDetail';

import AjaxLoader from '../../../../components/AjaxLoader';

import {
  getOfferDetail
} from '../../../../actions/Profile/OfferDetail';

class ProfileDetail extends React.Component {
  componentDidMount() {
    this.props.getOfferDetail();
  }

  render() {
    const { loading, offerDetail } = this.props;
    return (
      <ProfileMain>
        <div>
          <div className="d-flex align-items-center justify-content-between">
            <h4>Offer #{offerDetail && offerDetail.id}</h4>
            <Link to={"/profile/offers/my-offers"}>
              <BtnLink content="Close Offer"/>
            </Link>
          </div>
          <div className="d-flex align-items-start justify-content-between py-3">

            <div className="col-sm-4 p-0">
              <img src={offerDetail && offerDetail.thumbnail} alt="" className="img-fluid rounded shadow-lg" data-aos="fade"/>
            </div>

            <div className="col-sm-4 p-0 d-flex flex-column justify-content-between">
              <div className="pl-2">
                <p className="font-weight-bold mb-1">{offerDetail && offerDetail.game_title}</p>
                <p className="mb-1">{(offerDetail && offerDetail.game_region) || 'GLOBAL'}</p>
                <p className="mb-1">{offerDetail && offerDetail.date}</p>
              </div>
              <div className="mt-5 pl-2">
                <p className="mb-1">Documents:</p>
                <div>
                  {
                    offerDetail && !_.isEmpty(offerDetail.documents) && offerDetail.documents.map((document, i) => {
                      return (
                        <p key={i} className="mb-1">{document}</p>
                      )
                    })
                  }
                </div>
              </div>
            </div>

            <div className="col-sm-4 p-0">
              {
                offerDetail && !_.isEmpty(offerDetail.product_keys) && offerDetail.product_keys.map((productKey, i) => {
                  return (
                    <KeysDetail key={i} value={productKey.product_key} status={productKey.active}/>
                  )
                })
              }
            </div>
          </div>
          <div className="d-flex align-items-start justify-content-start pb-3">
            <div className="col-sm-3 p-0 mr-3 d-flex justify-content-between">
              {/*<DescriptionItem title="Price" desc="€12.00"/>*/}
              <div>
                <p className="mb-1">Price:</p>
                <p className="mb-1">€ {offerDetail && offerDetail.price}</p>
              </div>
              <div>
                <p className="mb-1">Donation:</p>
                <p className="mb-1">{offerDetail && offerDetail.donation_percentage} %</p>
              </div>
            </div>
          </div>
        </div>
        <AjaxLoader visible={loading}/>
      </ProfileMain>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.profile.offerDetail.loading,
    offerDetail: state.profile.offerDetail.offerDetail
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getOfferDetail: () => {
      dispatch(getOfferDetail(ownProps.match.params.id, ownProps.history));
    }
  }
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ProfileDetail);
