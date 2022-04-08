import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProfileMain from '../../';
import Breadcrumbs from '../../../../components/Navigation/Breadcrumbs';
import BtnLink from '../../../../components/Buttons/BtnLink';
import BtnPrimary from '../../../../components/Buttons/BtnPrimary';
import AccountStep1 from './AccountStep1';
import AccountStep2 from './AccountStep2';

class NewBankAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stepVal: 1,
      currentView: `Step1`,
    }
    this.nextStep = this.nextStep.bind(this);
    // this.prevStep = this.prevStep.bind(this);
  }

  // prevStep() {
  //     this.setState({
  //         stepVal: this.state.stepVal - 1,
  //         currentView: `Step${this.state.stepVal - 1}`
  //     })
  // }
  nextStep() {
    this.setState({
      stepVal: this.state.stepVal + 1,
      currentView: `Step${this.state.stepVal + 1}`
    })
  }

  render() {
    const { stepVal, currentView } = this.state;

    return (
      <ProfileMain>
        <Link to={"/profile/accounts/my-accounts"}>
          <Breadcrumbs content="Go Back"/>
        </Link>
        <h4 className="mb-4">Add Bank Account</h4>
        {/* Steps Rendering */}
        {{
          Step1: <AccountStep1/>,
          Step2: <AccountStep2/>,
          default: <AccountStep1/>
        }[currentView]}


        {/* Steps Navigation */}
        <div className="d-flex align-items-center justify-content-end">
          <Link to={"/profile/accounts/my-accounts"} className="px-4">
            <BtnLink content="Cancel"/>
          </Link>
          {currentView === "Step1" &&
          <div onClick={() => this.nextStep()}>
            <BtnPrimary content="Next"/>
          </div>
          }
          {currentView === "Step2" &&
          <Link to={"/profile/accounts/my-accounts"}>
            <BtnPrimary content="Save"/>
          </Link>
          }
        </div>

      </ProfileMain>
    );
  }
}

export default NewBankAccount;
