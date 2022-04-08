import React from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SignUp from '../../components/SignUp';
import { onChangeInput, changeSignUpCurrentView, registerUser } from '../../actions/Auth';

class SignUpPage extends React.Component {
  render () {
    return (
      <div>
        <div className="container">
          <div className="row py-5 mt-4">
            <div className="col-sm-5 m-auto">
              <SignUp {...this.props} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    signUpCurrentView: state.auth.signUpCurrentView,
    loading: state.auth.loading,
    username: state.auth.username,
    email: state.auth.email,
    password: state.auth.password
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeInput: (inputName, value) => {
      dispatch(onChangeInput(inputName, value));
    },
    changeSignUpCurrentView: currentView => {
      dispatch(changeSignUpCurrentView(currentView));
    },
    registerUser: inputValue => {
      dispatch(registerUser(inputValue));
    }
  }
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(SignUpPage)
