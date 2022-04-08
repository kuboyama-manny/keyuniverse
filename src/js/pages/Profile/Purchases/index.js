import React from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

import ProfileMain from '../';
import CustomSelect from '../../../components/Forms/CustomSelect';
import GameCard from '../../../components/GameCard';

import { GetPurchases } from '../../../actions/Profile/Purchases';

import AjaxLoader from '../../../components/AjaxLoader';

class Purchases extends React.Component {
  componentDidMount() {
    this.props.GetPurchases();
  }

  render () {
    const { loading, purchases } = this.props;
    return (
      <ProfileMain>
        <h4>My Purchases</h4>
        <div className="row">
          <div className="col-sm-4 ml-sm-auto">
            <CustomSelect label="SORT BY" opts={["Newest First"]}/>
          </div>
        </div>
        <div className="row">
          {
            !_.isEmpty(purchases) && purchases.map((purchase, i) => {
              return (
                <GameCard
                  key={i}
                  type={'purchase'}
                  size={4}
                  detail='1 Key'
                  offer={purchase}
                />
              )
            })
          }
        </div>
        <AjaxLoader visible={loading}/>
      </ProfileMain>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.profile.purchases.loading,
    purchases: state.profile.purchases.purchases
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    GetPurchases: () => {
      dispatch(GetPurchases(ownProps.history));
    }
  }
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Purchases);