import React, { Component } from 'react';
import { compose } from 'recompose';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

import FaIcon from '@fortawesome/react-fontawesome';
import {
  faShoppingCart,
  faSearch,
  faTimes
} from '@fortawesome/fontawesome-free-solid';
import NotificationSystem from 'react-notification-system';

import logo from './assets/logo-keyuniverse.png';
import NotificationDropdown from './NotificationDropdown';
import AuthDropDown from './AuthDropDown';
import AjaxLoader from '../AjaxLoader';
import UserAvatar from '../Avatars/UserAvatar';

import { addNotificationHelper } from '../../utils/helpers';
import { logoutUser } from '../../actions/Auth';
import {
  getSearchGames,
  onChangeSearchKey
} from '../../actions/Home';

import constants from '../../utils/constants';
import spinner from '../../../images/spinner.gif';


class MainNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowSearch: false,
      viewFullSearch: false,
      showCounter: 4
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.searchKey.length >= 3 && nextProps.searchKey !== this.props.searchKey) {
      this.props.getSearchGames();
    }
  }

  inToCart = () => {
    const { shippingCart, history } = this.props;
    if (shippingCart.length === 0) {
      addNotificationHelper(this.refs.notificationSystem, constants.notification.error.emptyShippingCartError, 'error');
    } else {
      history.push('/checkout/cart');
    }
  };

  setSearchInput = () => this.setState({ isShowSearch: !this.state.isShowSearch });

  linkToProduct = title => {
    this.setState({ isShowSearch: false }, () => {
      if (this.props.location.pathname === '/' || this.props.location.pathname === '/home') {
        this.props.history.push(`product/${title}`);
        return;
      }
      this.props.history.push(title);
    })
  };

  showFullSearch = () => {
    this.setState({ viewFullSearch: true, showCounter: this.props.searchedGames.length });
  };

  render() {
    const { isShowSearch, viewFullSearch, showCounter } = this.state;
    const { loggedIn, shippingCart, searchKey, onChangeSearchKey, isButtonLoading, searchedGames } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-gradient-secondary d-flex justify-content-center">
        <div className="col-3">
          <Link className="navbar-brand" to={"/home"}><img src={logo} alt=""/></Link>
        </div>
        {
          !isShowSearch ?
            <ul className="navbar-nav col-6 d-flex justify-content-center">
              <li className="nav-item">
                <Link className="nav-link" to={'/about-us'}>ABOUT US</Link>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="https://forums.keyuniverse.com/" target="_blank">COMMUNITY</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/games'}>SELL YOUR GAMES</Link>
              </li>
              <li className="nav-item">
                <p className="nav-link mb-0" onClick={this.setSearchInput}>
                  <span className="h6 mb-0 mr-2"><FaIcon icon={faSearch}/></span>
                  SEARCH
                </p>
              </li>
            </ul> :
            <div className="col-6 search-input-section">
              <FaIcon icon={faSearch} className="search-icon" />
              <input
                autoFocus={true}
                className="search-input"
                value={searchKey}
                onChange={(e) => onChangeSearchKey(e.currentTarget.value)}
              />
              <FaIcon icon={faTimes} onClick={this.setSearchInput} className="close-input" />
              <div className={`search-result ${!viewFullSearch ? 'full-view' : 'some-view'}`}>
                {
                  isButtonLoading ?
                    <div className="w-100 d-flex justify-content-center align-items-center">
                      <img src={spinner} alt="" style={{ width: '60px' }} />
                    </div> :
                    <div className="games-list">
                      {
                        searchedGames.length === 0 ?
                          <p className="mb-0">No any Data</p> :
                          !_.isEmpty(searchedGames) && searchedGames.slice(0, showCounter).map((game, i) => {
                            return (
                              <div
                                key={i}
                                className="game-row d-flex mb-2"
                                onClick={() => this.linkToProduct(game.safe_url)}
                              >
                                <div className="col-6 d-flex align-items-center">
                                  <div className="game-thumbnail col-3">
                                    <img src={game.thumbnail} style={{ width: '100%' }} alt="" />
                                  </div>
                                  <div className="game-detail col-9 ml-3">
                                    <p className="mb-0">{game.title}</p>
                                    <p className="mb-0">{game.genre}</p>
                                  </div>
                                </div>
                                <div className="col-3">
                                  {
                                    game.main_seller.valid ?
                                      <UserAvatar mainSellerData={game.main_seller} /> :
                                      <p className="mb-0">Nobody is selling this game yet</p>
                                  }
                                </div>
                                <div className="col-3">
                                  <p className="mb-0 px-1">€ 0.00</p>
                                </div>
                              </div>
                            )
                          })
                      }
                    </div>
                }
                {
                  searchedGames.length > 0 && !viewFullSearch &&
                  <div className="btn-link font-spacing text-uppercase load-more" onClick={this.showFullSearch}>
                    View All
                  </div>
                }
              </div>
            </div>
        }
        <div className="navbar-nav col-3 d-flex justify-content-sm-end align-items-center">
          {
            loggedIn
              ? <AuthDropDown userInfo={this.props.generalData} onClick={this.props.logoutUser}/>
              : <Link className="nav-link" to={'/login'}>SIGN IN</Link>
          }
          <NotificationDropdown/>
          <li className="nav-item" onClick={this.inToCart}>
            <span className="h6"><FaIcon icon={faShoppingCart}/></span>
            <span className="badge badge-info">{!_.isEmpty(shippingCart) && shippingCart.length}</span>
          </li>
        </div>
        <AjaxLoader visible={this.props.loading}/>
        <NotificationSystem ref='notificationSystem' />
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    loggedIn: state.auth.loggedIn,
    generalData: state.profile.generalData,
    shippingCart: state.product.items,
    isButtonLoading: state.home.isButtonLoading,
    searchKey: state.home.searchKey,
    searchedGames: state.home.searchedGames
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logoutUser: () => {
      dispatch(logoutUser(ownProps.history));
    },
    getSearchGames: () => {
      dispatch(getSearchGames());
    },
    onChangeSearchKey: (searchKey) => {
      dispatch(onChangeSearchKey(searchKey));
    }
  }
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(MainNav);