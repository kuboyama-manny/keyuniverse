import React, { Component } from 'react';
import CustomInput from '../../../../../components/Forms/CustomInput';

class AccountStep2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountType: 1,
    };
    this.toggleAccountType = this.toggleAccountType.bind(this);
  }

  toggleAccountType() {
    if (this.state.accountType === 1) {
      this.setState({accountType: 2})
    } else {
      this.setState({accountType: 1})
    }

  }

  render() {
    const { accountType } = this.state;

    return (
      <div data-aos="fade">
        <h5 className="font-spacing font-weight-light">STEP 2: BANK ACCOUNT</h5>

        <div className="form-group">
          <label htmlFor="accountHolderType">Choose account holder type.</label>
          <div className="custom-control custom-radio">
            <input type="radio" id="accountHolderType1" name="accountHolderType" className="custom-control-input"
                   onChange={() => this.toggleAccountType()} defaultChecked/>
            <label className="custom-control-label " htmlFor="accountHolderType1">
              Individual
            </label>
          </div>
          <div className="custom-control custom-radio">
            <input type="radio" id="accountHolderType2" name="accountHolderType" className="custom-control-input"
                   onChange={() => this.toggleAccountType()}/>
            <label className="custom-control-label" htmlFor="accountHolderType2">Company</label>
          </div>
        </div>


        {accountType === 1 &&
        <div>
          <div className="form-row mb-2">
            <div className="col-sm-4">
              <CustomInput label="Country" placeholder="Enter Country"/>
            </div>
            <div className="col-sm-4">
              <CustomInput label="Currency" placeholder="Enter Currency"/>
            </div>
          </div>
          <div className="form-row mb-2">
            <div className="col-sm-6">
              <CustomInput label="Account Number" placeholder="Enter account number"/>
            </div>
            <div className="col-sm-6">
              <CustomInput label="Account holder name" placeholder="Enter Account Holder Name"/>
            </div>
          </div>
          <div className="form-row mb-2">
            <div className="col-sm-6">
              <CustomInput label="Address Line" placeholder="Enter Address Line"/>
            </div>
          </div>
        </div>
        }
        {accountType === 2 &&
        <div data-aos="fade" className="card bg-dark p-3">Here Goes Company Fields</div>
        }

      </div>
    );
  }
}

export default AccountStep2;
