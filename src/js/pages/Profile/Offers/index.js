import React from 'react';
import { compose } from 'recompose';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import FaIcon from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/fontawesome-free-solid';
import _ from 'lodash';

import ProfileMain from '../';
import CustomSelect from '../../../components/Forms/CustomSelect';
import GameCard from '../../../components/GameCard';
import Pagination from '../../../components/Navigation/Pagination';
import AjaxLoader from '../../../components/AjaxLoader';

import { getProfileOffers } from '../../../actions/Profile/Offers';
import { setOfferStatus, resetOfferStatus } from '../../../actions/Profile/NewOffer';

class MyOffers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: 'offers'
    }
  }

  componentDidMount() {
    this.props.getProfileOffers();
    this.props.resetOfferStatus();
  }

  setCurrentTab = (tabTitle) => this.setState({ currentTab: tabTitle });

  render() {
    const { currentTab } = this.state;
    const { setOfferStatus } = this.props;
    return (
      <ProfileMain>
        <h4>My Offers</h4>
        <ul className="nav nav-tabs mb-3">
          <li className="nav-item">
            <a className={`nav-link ${currentTab === 'offers' ? 'active' : null}`} onClick={() => this.setCurrentTab('offers')}>OFFERS</a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${currentTab === 'archive' ? 'active' : null}`} onClick={() => this.setCurrentTab('archive')}>ARCHIVE</a>
          </li>
        </ul>
        <div className="row">
          <div className="col-sm-4 ml-auto">
            <CustomSelect label="Sort By" opts={["A-Z", "Z-A"]}/>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3 col-6">
            <Link to={'/profile/offers/new'} className="game-card">
              <div className="game-card-top mb-2">
                <div className="game-card-link">
                  <span className="card-link-icon"><FaIcon icon={faPlus}/></span>
                  <div>Create <div className="w-100"/>new offer</div>
                </div>
              </div>
            </Link>
          </div>
          {
            !_.isEmpty(this.props.offers) && currentTab === 'offers' && this.props.offers.map((offer, i) => {
              return (
                <GameCard
                  key={i}
                  user
                  type={'offer'}
                  detail={offer.genre}
                  offer={offer}
                  setOfferStatus={setOfferStatus}
                />
              )
            })
          }
        </div>
        <Pagination/>
        <AjaxLoader visible={this.props.loading}/>
      </ProfileMain>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.profile.offers.loading,
    offers: state.profile.offers.offers
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getProfileOffers: () => {
      dispatch(getProfileOffers(ownProps.history));
    },
    setOfferStatus: offer => {
      dispatch(setOfferStatus(offer));
    },
    resetOfferStatus: () => {
      dispatch(resetOfferStatus());
    }
  }
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(MyOffers);
