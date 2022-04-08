import React from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
import Login from '../../components/Login';
import { onChangeInput, changeLoginCurrentView, loginUser } from '../../actions/Auth';

class LoginPage extends React.Component {
  render () {
    return (
      <div>
        <div className="container">
          <div className="row py-5 mt-4">
            <div className="col-sm-5 m-auto">
              <Login {...this.props} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loginCurrentView: state.auth.loginCurrentView,
    loading: state.auth.loading,
    username: state.auth.username,
    email: state.auth.email,
    password: state.auth.password,
    invalidUser: state.auth.invalidUser
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const redirectedFrom = _.get(ownProps, 'location.state.from.pathname') || '/profile/general';
  const queryParam = _.get(ownProps, 'location.state.from.search') || '';
  return {
    onChangeInput: (inputName, value) => {
      dispatch(onChangeInput(inputName, value));
    },
    changeLoginCurrentView: currentView => {
      dispatch(changeLoginCurrentView(currentView));
    },
    loginUser: inputValue => {
      dispatch(loginUser(inputValue))
        .then(() => ownProps.history.push(`${redirectedFrom}${queryParam}`));
    }
  }
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(LoginPage)
