import React from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import ProfileNav from '../';
import BtnLink from '../../../components/Buttons/BtnLink';
import TransactionsList from './TransactionsList';

import AjaxLoader from '../../../components/AjaxLoader';

import {
  getTransactions
} from '../../../actions/Profile/Wallet';

class Wallet extends React.Component {
  componentDidMount() {
    this.props.getTransactions();
  }

  render() {
    const { loading, balance, transactions } = this.props;
    return (
      <ProfileNav>
        <h4>My Wallet</h4>
        <div className="row py-3">
          <div className="col-md-4 col-sm-12"/>
          <div className="col-md-4 col-sm-6">
            <div className="card bg-secondary">
              <div className="card-body py-2 d-flex justify-content-between align-items-center">
                <small className="font-weight-bold">YOUR BALANCE</small>
                <span className="h5 m-0">€ {balance}</span>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 d-flex align-items-center justify-content-end">
            <BtnLink content="WITHDRAW"/>
          </div>
        </div>
        <TransactionsList transactions={transactions} />
        <AjaxLoader visible={loading}/>
      </ProfileNav>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.profile.wallet.loading,
    balance: state.profile.wallet.balance,
    transactions: state.profile.wallet.transactions
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getTransactions: () => {
      dispatch(getTransactions(ownProps.history));
    }
  }
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Wallet);
