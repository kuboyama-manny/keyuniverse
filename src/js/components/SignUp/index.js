import React, {Component} from 'react';
import CustomInput from '../Forms/CustomInput';
import BtnPrimary from '../Buttons/BtnPrimary';
import AjaxLoader from '../AjaxLoader';

// sign up and sign up confirmation

class SignUpContainer extends Component {
  changeView = (view) => {
    this.props.changeSignUpCurrentView(view);
  };

  registerUser = () => {
    const { username, email, password, registerUser } = this.props;
    const inputValue = {
      username,
      email,
      password
    };
    registerUser(inputValue);
  };

  render() {
    const { signUpCurrentView, history } = this.props;
    return (
      <div className="text-center mt-5">
        {/* Sign Up */}
        {signUpCurrentView === 'signup' &&
        <div data-aos="fade">
          <h4 className="mb-4">Create Your Account</h4>
          <CustomInput
            label="Nickname"
            placeholder="Enter your nickname"
            value={this.props.username}
            onChange={(e) => this.props.onChangeInput('username', e.currentTarget.value)}
          />
          <CustomInput
            label="Email"
            placeholder="Enter your email"
            value={this.props.email}
            onChange={(e) => this.props.onChangeInput('email', e.currentTarget.value)}
          />
          <CustomInput
            label="Password"
            placeholder="Enter your password"
            type="password"
            value={this.props.password}
            onChange={(e) => this.props.onChangeInput('password', e.currentTarget.value)}
          />
          <div className="form-check mb-4">
            <input className="form-check-input" type="checkbox" value="" id="agreeCheck"/>
            <label className="form-check-label" htmlFor="agreeCheck">
              I agree with the Privacy Policy and <span className="font-weight-bold">Terms and Conditions</span>
            </label>
          </div>
          <div className="form-group text-center">
            <span onClick={() => {
              this.changeView('signup-confirm')
            }}>
              <BtnPrimary
                content="Sign Up"
                onClick={this.registerUser}
              />
            </span>
          </div>
          <span>If you already have an account then
            <button
              className="font-weight-bold px-0 btn btn-link text-white"
              onClick={() => history.push('/login')}>
              SIGN IN
            </button>
          </span>
        </div>
        }
        {/* SignUp Confirmation */}
        {signUpCurrentView === 'signup-confirm' &&
        <div data-aos="fade">
          <h4 className="mb-4">Email Verification</h4>
          <p>We have just sent you a message on your email with a verification link to your account.</p>
          <span onClick={() => {
            this.changeView('signin')
          }}>
            <BtnPrimary
              content="Go Back to Login"
              onClick={() => history.push('/login')}
            />
          </span>
        </div>
        }
        <AjaxLoader visible={this.props.loading}/>
      </div>
    );
  }
}

export default SignUpContainer;
