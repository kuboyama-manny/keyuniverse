import React, {Component} from 'react';
import NotificationSystem from 'react-notification-system';

import CustomInput from '../Forms/CustomInput';
import BtnPrimary from '../Buttons/BtnPrimary';
import AjaxLoader from '../AjaxLoader';
import { addNotificationHelper, emailValidation } from '../../utils/helpers';
import constants from "../../utils/constants";

// sign in, password recovery and password recovery confirmation

class LoginContainer extends Component {
  UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.invalidUser && this.props.invalidUser !== nextProps.invalidUser) {
      addNotificationHelper(this.refs.notificationSystem, constants.notification.error.invalidUserError, 'error');
    }
  }

  changeView = (view) => {
    this.props.changeLoginCurrentView(view);
  };

  loginUser = () => {
    const { email, password, loginUser } = this.props;
    const inputValue = { email, password };
    if (!emailValidation(email)) {
      addNotificationHelper(this.refs.notificationSystem, constants.notification.error.invalidEmailError, 'error');
      return;
    }
    loginUser(inputValue);
  };

  keyPress = (event) => {
    if(event.key === 'Enter'){
      this.loginUser();
    }
  };

  render() {
    const { loginCurrentView, history } = this.props;
    return (
      <div className="text-center mt-5">
        {/* Sign In */}
        {loginCurrentView === 'signin' &&
        <div data-aos="fade">
          <h4 className="mb-4">Already have an account?</h4>
          <CustomInput
            label="EMAIl"
            placeholder="Enter your email"
            value={this.props.email}
            onChange={(e) => this.props.onChangeInput('email', e.currentTarget.value)}
            onKeyPress={this.keyPress}
          />
          <CustomInput
            label="Password"
            placeholder="Enter your password"
            value={this.props.password}
            type="password"
            onChange={(e) => this.props.onChangeInput('password', e.currentTarget.value)}
            onKeyPress={this.keyPress}
          />
          <div className="form-group text-center">
            <button className="btn btn-link text-white text-uppercase"
                    onClick={() => this.changeView('recover-password')}>Forgot Password ?
            </button>
          </div>
          <div className="form-group text-center">
            <BtnPrimary
              content="Sign In"
              onClick={this.loginUser}
            />
          </div>
          <span>If you have no account then
            <button
              className="font-weight-bold px-0 btn btn-link text-white"
              onClick={() => history.push('/register')}>
              SIGN UP
            </button>
          </span>
        </div>
        }
        {/* Recover Password */}
        {loginCurrentView === 'recover-password' &&
        <div data-aos="fade">
          <h4 className="mb-4">Password Recovery</h4>
          <p>Use your email and we will send the instruction for recovering your password.</p>
          <CustomInput label="Email" placeholder="Enter your email"/>
          <span onClick={() => {
            this.changeView('recover-confirm')
          }}>
            <BtnPrimary content="Send Instruction"/>
          </span>
        </div>
        }
        {/* Recover Password Confirmation */}
        {loginCurrentView === 'recover-confirm' &&
        <div data-aos="fade">
          <h4 className="mb-4">Password Recovery</h4>
          <p>We have just sent you a message on your email with the instructions to create a new password</p>
          <span onClick={() => {
            this.changeView('signin')
          }}>
            <BtnPrimary content="Go Back to Login"/>
          </span>
        </div>
        }
        <AjaxLoader visible={this.props.loading}/>
        <NotificationSystem ref='notificationSystem' />
      </div>
    );
  }
}

export default LoginContainer;
